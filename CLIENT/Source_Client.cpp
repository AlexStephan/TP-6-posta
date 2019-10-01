#include <iostream>
#include <cstdio>
#include <boost/asio.hpp>
#include <boost/chrono.hpp>
#include <boost/timer/timer.hpp>

#define HELLO_PORT_STR "50013"
#define SERVER_IP "localhost"

using namespace std;

class client
{
public:
	client();
	void startConnection(const char* host);
	void receiveMessage();
	~client();

private:
	boost::asio::io_service* IO_handler;
	boost::asio::ip::tcp::socket* socket_forClient;
	boost::asio::ip::tcp::resolver* client_resolver;
	boost::asio::ip::tcp::resolver::iterator endpoint;
};

client::
client()
{
	IO_handler = new boost::asio::io_service();
	socket_forClient = new boost::asio::ip::tcp::socket(*IO_handler);
	client_resolver = new boost::asio::ip::tcp::resolver(*IO_handler);
}

client::
~client()
{
	socket_forClient->close();
	delete client_resolver;
	delete socket_forClient;
	delete IO_handler;
}

void client::
startConnection(const char* host)
{
	endpoint = client_resolver->resolve(boost::asio::ip::tcp::resolver::query(host, HELLO_PORT_STR));
	boost::system::error_code error;
	boost::asio::connect(*socket_forClient, endpoint, error);
	if (error)
	{
		cout << "Error connecting to " << host << " Error Message: " << error.message() << endl;
		if (error.value() == boost::asio::error::connection_refused)
			cout << "Host " << host << " is not listening on the other side" << endl;
	}
	socket_forClient->non_blocking(true);
}

void client::
receiveMessage()
{
	boost::system::error_code error;
	char buf[2000];
	size_t len = 0;
	cout << "Receiving Message" << std::endl;
	boost::timer::cpu_timer t;
	t.start();
	boost::timer::cpu_times pastTime = t.elapsed();
	double elapsedSeconds = 0.0;

	do
	{
		len = socket_forClient->read_some(boost::asio::buffer(buf), error);

		boost::timer::cpu_times currentTime = t.elapsed();

		if ((currentTime.wall - pastTime.wall) > 1e9)
		{
			elapsedSeconds += (currentTime.wall - pastTime.wall) / 1e9;
			pastTime = currentTime;
			cout << "Pasaron " << (int)floor(elapsedSeconds) << " segundos." << endl;
		}

		if (!error)
			buf[len] = '\0';

	} while (error.value() == WSAEWOULDBLOCK);

	if (!error)
		cout << std::endl << "Server sais: " << buf << std::endl;
	else
		cout << "Error while trying to connect to server " << error.message() << std::endl;
}


int
main(int argc, char* argv[])
{

	client conquering;
	cout << "Trying to connect to " << SERVER_IP << " on port " << HELLO_PORT_STR << std::endl;
	conquering.startConnection(SERVER_IP);
	conquering.receiveMessage();
	cout << "Press Enter to exit..." << std::endl;

	getchar();
	return 0;
}