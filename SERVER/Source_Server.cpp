
#include <iostream>
#include <cstdio>
#include <cstring>
#include <boost/asio.hpp>
#include <boost/function.hpp>
#include <boost/bind.hpp>

#define HELLO_PORT 80

using namespace std;

class server
{
public:
	server();				//Escucha puerto 80
	void startConnection();	//Realiza conexion con client
	void communicate();		//Recibe comando, analisa, y envia respuesta
//	void sendMessage();
	~server();

private:
	bool analyse(const string& command,string& path);// TO-DO
	//Analiza la validez del comando pasado por "command".
	//True: el comando es valido, y el path buscado es devuelto en "path"
	bool copyFile(const string& path, string& content); //TO-DO
	//Busca el archivo especificado en "path"
	//Si lo encuentra, devuelve TRUE y copia el contenido en "content"
	boost::asio::io_service* IO_handler;
	boost::asio::ip::tcp::socket* socket_forServer;
	boost::asio::ip::tcp::acceptor* server_acceptor;
};


void server::
startConnection()
{

	//Uncomment if non-blocking mode is desired
	//
	//When non-blocking mode is chosen accept operation
	//will fail with boost::asio::error::would_block
	//if there's no client inmediatelly connected when accept operation is performed.
	//Must comment blocking mode.
	//
	server_acceptor->non_blocking(true);
	boost::system::error_code error;
	do
	{
		server_acceptor->accept(*socket_forServer, error);
	} while ((error.value() == WSAEWOULDBLOCK));
	if (error)
		std::cout << "Error while trying to listen to " << HELLO_PORT << "Port " << error.message() << std::endl;

	//server_acceptor->accept(*socket_forServer);
	socket_forServer->non_blocking(true);
}

/*void server::
sendMessage()
{
	char buf[2000] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque sit amet felis sit amet auctor.Maecenas ac tempor enim, ac accumsan sem.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \r\n In posuere congue suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Vivamus justo metus, pellentesque sed mi quis, euismod rhoncus neque.Integer lobortis est lorem, in euismod erat ullamcorper et.In leo arcu, vestibulum ut dapibus eu, consectetur a dolor.Praesent efficitur eros ut felis sagittis, quis tristique ex venenatis. Nam convallis congue enim ac vehicula.In a augue ornare, scelerisque nulla a, elementum libero.Cras tincidunt tincidunt libero a efficitur. \r\nPhasellus consectetur nunc ac auctor mollis.Sed tempor in lacus quis ultricies.Aenean sagittis ut ante eget efficitur.Sed sit amet sodales quam, non sodales est.Integer lorem mi, aliquet quis pulvinar eu, vestibulum eget quam.Nullam augue nisl, euismod ut egestas ac, aliquam id eros.Curabitur malesuada, nunc ut tincidunt tempus, tellus nulla tincidunt neque, ut ornare ligula magna quis felis.Praesent aliquet a urna et laoreet.Etiam ut metus leo.In eleifend diam tellus, sit amet faucibus enim pellentesque vel. Nunc eget risus suscipit, condimentum sapien ac, consequat est.Nunc pulvinar consequat pharetra.Etiam sed sodales quam.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Proin viverra sem quis sapien rhoncus lacinia id id neque.Etiam quis sodales enim.Donec non purus nulla.Fusce pharetra turpis id neque dapibus, vitae pulvinar libero tincidunt.Vestibulum quis metus tellus.In iaculis, enim ut mattis tristique, justo turpis tincidunt sapien, ut ornare mi massa sit amet sem.Maecenas eleifend elementum elementum.Aliquam erat volutpat.";

	size_t len;
	boost::system::error_code error;

	do
	{
		len = socket_forServer->write_some(boost::asio::buffer(buf, strlen(buf)), error);
	} while ((error.value() == WSAEWOULDBLOCK));
	if (error)
		std::cout << "Error while trying to connect to server " << error.message() << std::endl;
}*/

void server::communicate() {

	//Receive

	boost::system::error_code error;
	string buf;
	size_t len = 0;
	cout << "Receiving Instruction" << std::endl;

	do
	{
		len = socket_forServer->read_some(boost::asio::buffer(buf), error);
		if (!error)
			buf += '\0';

	} while (error.value() == WSAEWOULDBLOCK);

	if (!error)
		cout << endl << "Instruction received:" << endl << endl << buf << endl;
	else {
		cout << "Error while trying receive instruction:  " << error.message() << std::endl;
		return;
	}

	string path;
	string content;
	if (analyse(buf, path)) {
		if (copyFile(path, content)) {
			//MANDAR EL CONTENIDO AL PUERTO 80 (200 OK)
			//AVISAR POR LINEA DE COMANDOS Q LA VIDA ES HERMOSA, Y HAY Q DISFRUTARLA
		}
		else {
			//MANDAR 404 Not Found AL PUERTO 80
			//AVISAR POR LINEA DE COMANDOS Q NO SE PUDO ABRIR EL ARCHIVO / NO SE ENCONTRO
		}
	}
	else {
		//NO MANDAR NINGUN MENSAJE POR EL PUERTO 80.
		//AVISAR POR LINEA DE COMANDOS Q SE RECIBIO UN COMANDO INVALIDO
	}

}

bool server::analyse(const string& command, string& path) {

}

server::
server()
{
	IO_handler = new boost::asio::io_service();
	boost::asio::ip::tcp::endpoint ep(boost::asio::ip::tcp::v4(), HELLO_PORT);

	socket_forServer = new boost::asio::ip::tcp::socket(*IO_handler);
	server_acceptor = new boost::asio::ip::tcp::acceptor(*IO_handler, ep);
}

server::
~server()
{
	server_acceptor->close();
	socket_forServer->close();
	delete server_acceptor;
	delete socket_forServer;
	delete IO_handler;
}

int
main(int argc, char* argv[])
{
	server conquering;
	std::cout << std::endl << "_Start Listening on port " << HELLO_PORT << std::endl;
	conquering.startConnection();
	std::cout << "_Somebody connected to port " << HELLO_PORT << std::endl;
	std::cout << "_Press Enter to Send Message  " << std::endl;
	//	getchar();
//	conquering.sendMessage();
	Sleep(50); // Le damos 50ms para que llegue el mensaje antes de cerrar el socket.

	return 0;
}