var isCompatible=function(){if(navigator.appVersion.indexOf('MSIE')!==-1&&parseFloat(navigator.appVersion.split('MSIE')[1])<6){return false;}return true;};var startUp=function(){mw.config=new mw.Map(true);mw.loader.addSource({"local":{"loadScript":"/es/load.php","apiScript":"/es/api.php"},"common":{"loadScript":"https://slot1-images.wikia.nocookie.net/__load/-/","apiScript":"/es/api.php"}});mw.loader.register([["site",1566326700,[],"site"],["noscript",1202225400,[],"noscript"],["startup",1569795300,[],"startup"],["user",1202225400,[],"user"],["user.groups",1202225400,[],"user"],["user.options",1569795300,[],"private"],["user.cssprefs",1569795300,["mediawiki.user"],"private"],["user.tokens",1202225400,[],"private"],["filepage",1202225400],["mediawiki.language.data",1547756100,["mediawiki.language.init"]],["skins.monobook",1569393900,[],null,"common"],["jquery",1569393900,[],null,"common"],["jquery.appear",1569393900,[],null,"common"],["jquery.arrowSteps",1569393900,[],null,"common"],[
"jquery.async",1569393900,[],null,"common"],["jquery.autoEllipsis",1569393900,["jquery.highlightText"],null,"common"],["jquery.byteLength",1569393900,[],null,"common"],["jquery.byteLimit",1569393900,["jquery.byteLength"],null,"common"],["jquery.checkboxShiftClick",1569393900,[],null,"common"],["jquery.client",1569393900,[],null,"common"],["jquery.collapsibleTabs",1569393900,[],null,"common"],["jquery.color",1569393900,["jquery.colorUtil"],null,"common"],["jquery.colorUtil",1569393900,[],null,"common"],["jquery.cookie",1569393900,[],null,"common"],["jquery.delayedBind",1569393900,[],null,"common"],["jquery.expandableField",1569393900,["jquery.delayedBind"],null,"common"],["jquery.farbtastic",1569393900,["jquery.colorUtil"],null,"common"],["jquery.footHovzer",1569393900,[],null,"common"],["jquery.form",1569393900,[],null,"common"],["jquery.getAttrs",1569393900,[],null,"common"],["jquery.highlightText",1569393900,[],null,"common"],["jquery.hoverIntent",1569393900,[],null,"common"],[
"jquery.json",1569393900,[],null,"common"],["jquery.localize",1569393900,[],null,"common"],["jquery.makeCollapsible",1569393900,[],null,"common"],["jquery.messageBox",1569393900,[],null,"common"],["jquery.mockjax",1569393900,[],null,"common"],["jquery.mw-jump",1569393900,[],null,"common"],["jquery.mwExtension",1569393900,[],null,"common"],["jquery.placeholder",1569393900,[],null,"common"],["jquery.qunit",1569393900,[],null,"common"],["jquery.qunit.completenessTest",1569393900,["jquery.qunit"],null,"common"],["jquery.spinner",1569393900,[],null,"common"],["jquery.suggestions",1569393900,["jquery.autoEllipsis"],null,"common"],["jquery.tabIndex",1569393900,[],null,"common"],["jquery.tablesorter",1569393900,["jquery.mwExtension"],null,"common"],["jquery.textSelection",1569393900,[],null,"common"],["jquery.validate",1569393900,[],null,"common"],["jquery.xmldom",1569393900,[],null,"common"],["jquery.tipsy",1569393900,[],null,"common"],["jquery.ui.core",1569393900,["jquery"],"jquery.ui",
"common"],["jquery.ui.widget",1569393900,[],"jquery.ui","common"],["jquery.ui.mouse",1569393900,["jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.position",1569393900,[],"jquery.ui","common"],["jquery.ui.draggable",1569393900,["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.droppable",1569393900,["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget","jquery.ui.draggable"],"jquery.ui","common"],["jquery.ui.resizable",1569393900,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.selectable",1569393900,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.sortable",1569393900,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.accordion",1569393900,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.autocomplete",1569393900,["jquery.ui.core","jquery.ui.widget","jquery.ui.position"],"jquery.ui","common"],[
"jquery.ui.button",1569393900,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.datepicker",1569393900,["jquery.ui.core"],"jquery.ui","common"],["jquery.ui.dialog",1569393900,["jquery.ui.core","jquery.ui.widget","jquery.ui.button","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.position","jquery.ui.resizable"],"jquery.ui","common"],["jquery.ui.progressbar",1569393900,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.slider",1569393900,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.tabs",1569393900,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.effects.core",1569393900,["jquery"],"jquery.ui","common"],["jquery.effects.blind",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.bounce",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.clip",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.drop",1569393900,[
"jquery.effects.core"],"jquery.ui","common"],["jquery.effects.explode",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.fade",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.fold",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.highlight",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.pulsate",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.scale",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.shake",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.slide",1569393900,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.transfer",1569393900,["jquery.effects.core"],"jquery.ui","common"],["mediawiki",1569393900,[],null,"common"],["mediawiki.api",1569393900,["mediawiki.util"],null,"common"],["mediawiki.api.category",1569393900,["mediawiki.api","mediawiki.Title"],null,"common"],["mediawiki.api.edit",
1569393900,["mediawiki.api","mediawiki.Title"],null,"common"],["mediawiki.api.parse",1569393900,["mediawiki.api"],null,"common"],["mediawiki.api.titleblacklist",1569393900,["mediawiki.api","mediawiki.Title"],null,"common"],["mediawiki.api.watch",1569393900,["mediawiki.api","mediawiki.user"],null,"common"],["mediawiki.debug",1569393900,["jquery.footHovzer"],null,"common"],["mediawiki.debug.init",1569393900,["mediawiki.debug"],null,"common"],["mediawiki.feedback",1569393900,["mediawiki.api.edit","mediawiki.Title","mediawiki.jqueryMsg","jquery.ui.dialog"],null,"common"],["mediawiki.htmlform",1569393900,[],null,"common"],["mediawiki.Title",1569393900,["jquery.byteLength","mediawiki.util"],null,"common"],["mediawiki.Uri",1569393900,[],null,"common"],["mediawiki.user",1569393900,["jquery.cookie"],null,"common"],["mediawiki.util",1569393900,["jquery.client","jquery.cookie","jquery.messageBox","jquery.mwExtension"],null,"common"],["mediawiki.action.edit",1569393900,["jquery.textSelection",
"jquery.byteLimit"],null,"common"],["mediawiki.action.view.redirect",1569393900,["jquery.client"],null,"common"],["mediawiki.action.history",1569393900,["jquery.ui.button"],"mediawiki.action.history","common"],["mediawiki.action.history.diff",1569393900,[],"mediawiki.action.history","common",["sass"]],["mediawiki.action.view.dblClickEdit",1569393900,["mediawiki.util","mediawiki.page.startup"],null,"common"],["mediawiki.action.view.metadata",1569393900,[],null,"common"],["mediawiki.action.view.rightClickEdit",1569393900,[],null,"common"],["mediawiki.action.watch.ajax",1569393900,["mediawiki.api.watch","mediawiki.util"],null,"common"],["mediawiki.language",1569393900,["mediawiki.language.data","mediawiki.cldr"],null,"common"],["mediawiki.cldr",1569393900,["mediawiki.libs.pluralruleparser"],null,"common"],["mediawiki.libs.pluralruleparser",1569393900,[],null,"common"],["mediawiki.language.init",1569393900,[],null,"common"],["mediawiki.jqueryMsg",1569393900,["mediawiki.util",
"mediawiki.language"],null,"common"],["mediawiki.language.months",1569393900,["mediawiki.language"],null,"common"],["mediawiki.language.names",1566822600,["mediawiki.language.init"]],["mediawiki.libs.jpegmeta",1569393900,[],null,"common"],["mediawiki.page.ready",1569393900,["jquery.checkboxShiftClick","jquery.makeCollapsible","jquery.mw-jump","mediawiki.util"],null,"common"],["mediawiki.page.startup",1569393900,["jquery.client","mediawiki.util"],null,"common"],["mediawiki.special",1569393900,[],null,"common"],["mediawiki.special.block",1569393900,["mediawiki.util"],null,"common"],["mediawiki.special.changeemail",1569393900,["mediawiki.util"],null,"common"],["mediawiki.special.changeslist",1569393900,["jquery.makeCollapsible"],null,"common"],["mediawiki.special.movePage",1569393900,["jquery.byteLimit"],null,"common"],["mediawiki.special.preferences",1569393900,[],null,"common"],["mediawiki.special.recentchanges",1569393900,["mediawiki.special"],null,"common"],["mediawiki.special.search"
,1569393900,[],null,"common"],["mediawiki.special.undelete",1569393900,[],null,"common"],["mediawiki.special.upload",1569393900,["mediawiki.libs.jpegmeta","mediawiki.util"],null,"common"],["mediawiki.special.javaScriptTest",1569393900,["jquery.qunit"],null,"common"],["test.sinonjs",1569393900,[],null,"common"],["mediawiki.tests.qunit.testrunner",1569795300,["jquery.qunit","jquery.qunit.completenessTest","mediawiki.page.startup","mediawiki.page.ready","test.sinonjs"],null,"common"],["mediawiki.legacy.ajax",1569393900,["mediawiki.util","mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.commonPrint",1569393900,[],null,"common"],["mediawiki.legacy.config",1569393900,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.IEFixes",1569393900,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.mwsuggest",1569393900,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.preview",1569393900,["mediawiki.legacy.wikibits"],null,"common"],[
"mediawiki.legacy.protect",1569393900,["mediawiki.legacy.wikibits","jquery.byteLimit"],null,"common"],["mediawiki.legacy.shared",1569393900,[],null,"common"],["mediawiki.legacy.upload",1569393900,["jquery.spinner","mediawiki.util"],null,"common"],["mediawiki.legacy.wikibits",1569393900,["mediawiki.util","wikia.importScript"],null,"common"],["mediawiki.legacy.wikiprintable",1569393900,[],null,"common"],["amd",1569393900,[],null,"common"],["amd.shared",1202225400,["wikia.instantGlobals","wikia.cache","wikia.cookies","wikia.document","wikia.geo","wikia.fbLocale","wikia.loader","wikia.location","wikia.log","wikia.mw","wikia.nirvana","wikia.querystring","wikia.history","wikia.throbber","wikia.thumbnailer","wikia.tracker","wikia.window","wikia.abTest","underscore"],null,"common"],["wikia.window",1569393900,["amd"],null,"common"],["wikia.cache",1569393900,["amd","wikia.window"],null,"common"],["wikia.document",1569393900,["amd","wikia.window"],null,"common"],["wikia.location",1569393900,[
"amd","wikia.window"],null,"common"],["wikia.nirvana",1569393900,["amd"],null,"common"],["wikia.mw",1569393900,["amd","wikia.window"],null,"common"],["wikia.fbLocale",1569393900,["wikia.geo"],null,"common"],["wikia.loader",1569393900,["amd","wikia.window","wikia.mw","wikia.nirvana","wikia.fbLocale"],null,"common"],["wikia.querystring",1569393900,["amd","wikia.window"],null,"common"],["wikia.history",1569393900,["amd","wikia.window"],null,"common"],["wikia.cookies",1569393900,["amd","wikia.window"],null,"common"],["wikia.log",1569393900,["amd","wikia.querystring","wikia.cookies"],null,"common"],["wikia.abTest",1569393900,["amd","wikia.window"],null,"common"],["wikia.instantGlobals",1569393900,["amd","wikia.window"],null,"common"],["wikia.thumbnailer",1569393900,["amd"],null,"common"],["wikia.geo",1569393900,["amd","wikia.cookies","wikia.querystring"],null,"common"],["wikia.tracker",1569393900,["amd","wikia.window","wikia.log","wikia.tracker.stub"],null,"common"],["wikia.tracker.stub",
1569393900,["amd","wikia.window"],null,"common"],["wikia.throbber",1569393900,["amd"],null,"common"],["underscore",1569393900,["amd"],null,"common"],["wikia.aim",1569393900,["amd"],null,"common"],["wikia.uniqueId",1569393900,["amd"],null,"common"],["wikia.modernizr",1569795300,["amd","modernizr"],null,"common"],["wikia.mustache",1569393900,["amd"],null,"common"],["wikia.underscore",1569393900,["amd","wikia.window"],null,"common"],["wikia.stickyElement",1569393900,["amd","wikia.window","wikia.document","wikia.underscore"],null,"common"],["wikia.jquery.ui",1569393900,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse","jquery.ui.position","jquery.ui.draggable","jquery.ui.droppable","jquery.ui.sortable","jquery.ui.autocomplete","jquery.ui.slider","jquery.ui.tabs","jquery.ui.datepicker"],"jquery.ui","common"],["jquery.mustache",1569393900,["wikia.mustache"],null,"common"],["jquery.autocomplete",1569393900,[],null,"common"],["jquery.dataTables",1569393900,[],null,"common"],[
"jquery.timeago",1569393900,[],null,"common"],["wikia.yui",1569393900,[],"yui","common"],["wikia.importScript",1569393900,[],null,"common"],["wikia.article.edit",1569393900,["wikia.tracker"],null,"common"],["jquery.uls.data",1569393900],["jquery.i18n",1569393900,["mediawiki.libs.pluralruleparser"]],["ext.math.mathjax",1569393900,[],"ext.math.mathjax"],["ext.math.mathjax.enabler",1569393900],["ext.wikia.TimeAgoMessaging",1569393900,["jquery.timeago","mediawiki.jqueryMsg"]],["ext.designSystem",1202225400],["wikia.ext.instantGlobals",1569795300,[],null,"common"],["wikia.ext.instantGlobalsOverride",1569393900,[],null,"common"],["ext.bannerNotifications",1202225400],["ext.quickTools",1569393900,["mediawiki.user","mediawiki.util"]],["ext.createUserPage",1569393900,["mediawiki.user","mediawiki.util"]],["ext.quickAdopt",1569393900,["mediawiki.util","ext.createUserPage"]],["ext.wikia.authPreferences",1569393900],["ext.wikia.facebookTags",1569393900,[],null,"common"],["ext.wikia.multiLookup",
1569393900],["ext.wikia.ListGlobalUsers",1569393900],["ext.geshi.local",1202225400],["ext.siteWideMessages.anon",1569393900],["ext.scribunto",1569393900],["ext.scribunto.edit",1569393900,["ext.scribunto","mediawiki.api"]],["ext.wikia.InfoboxBuilder",1569393900,[],null,"local",["sass"]],["ext.categoryTree",1569393900],["ext.categoryTree.css",1569393900],["ext.checkUser",1569393900,["mediawiki.util"]],["ext.cite",1569393900,["jquery.tooltip"]],["jquery.tooltip",1569393900],["ext.wikia.ajaxpoll",1569393900,[],null,"local",["sass"]],["ext.wikia.WMU",1569393900,["wikia.yui","jquery.aim"]],["ext.wikia.LinkSuggest",1569393900,["jquery.ui.autocomplete"]],["ext.wikia.ListUsers",1569393900,["jquery.ui.autocomplete","jquery.dataTables"],null,"local",["sass"]],["ext.abuseFilter",1569393900],["ext.abuseFilter.edit",1569393900,["jquery.textSelection","jquery.spinner"]],["ext.abuseFilter.tools",1569393900,["jquery.spinner"]],["ext.abuseFilter.examine",1569393900],["ext.tabber",1569393900],["ext.nuke"
,1569393900],["ext.userLogin",1202225400],["ext.UserProfilePage.Lightbox",1569393900,["mediawiki.jqueryMsg"],null,"local",["sass"]],["ext.renameuser.modal",1569393900,["mediawiki.util"]],["ext.Chat2.ChatBanModal",1569393900],["ext.Chat2.ChatWidget",1202225400],["ext.Chat2.ChatBanList",1569393900,["jquery.dataTables","wikia.nirvana"],null,"local",["sass"]],["ext.Chat2",1202225400,["mediawiki.jqueryMsg"]],["ext.AdminDashboard",1202225400],["wikia.ext.abtesting",1562320800,[],null,"common"],["wikia.ext.abt3sting",1562320800,[],null,"common"],["wikia.ext.abtest",1569393900],["wikia.ext.abtesting.edit.styles",1569393900,[],null,"local",["sass"]],["wikia.ext.abtesting.edit",1569393900],["oojs",1569393900],["oojs-ui",1569393900,["oojs","oojs-ui.styles"]],["oojs-ui.styles",1569393900],["jquery.visibleText",1569393900],["Base64.js",1569393900],["easy-deflate.core",1569393900,["Base64.js"]],["easy-deflate.deflate",1569393900,["easy-deflate.core"]],["unicodejs",1569393900],["unicodejs.wordbreak",
1202225400,["unicodejs"]],["papaparse",1569393900],["rangefix",1569393900],["ext.visualEditor.viewPageTarget.init",1569393900,["jquery.client","mediawiki.page.startup","mediawiki.Title","mediawiki.Uri","mediawiki.util","user.options","ext.visualEditor.track"]],["ext.visualEditor.viewPageTarget.noscript",1569393900],["ext.visualEditor.viewPageTarget",1569393900,["ext.visualEditor.base","ext.visualEditor.mediawiki","ext.visualEditor.core.desktop","jquery.placeholder","mediawiki.feedback","mediawiki.jqueryMsg","mediawiki.util"]],["ext.visualEditor.mobileViewTarget",1569393900,["ext.visualEditor.base","ext.visualEditor.mediawiki.mobile","ext.visualEditor.core.mobile","ext.visualEditor.mwimage.core"]],["ext.visualEditor.ve",1569393900],["ext.visualEditor.track",1569393900,["ext.visualEditor.ve"]],["ext.visualEditor.base",1569393900,["oojs","oojs-ui","unicodejs","rangefix","ext.visualEditor.ve"]],["ext.visualEditor.mediawiki",1569393900,["jquery.visibleText","jquery.byteLength",
"jquery.client","mediawiki.api","mediawiki.language","mediawiki.Title","mediawiki.Uri","mediawiki.user","mediawiki.util","easy-deflate.deflate","user.options","user.tokens","ext.visualEditor.base","ext.visualEditor.track"]],["ext.visualEditor.mediawiki.mobile",1569393900,["ext.visualEditor.mediawiki","ext.visualEditor.core.mobile"]],["ext.visualEditor.standalone",1569393900,["ext.visualEditor.base","jquery.i18n"]],["ext.visualEditor.data",1569393900,["ext.visualEditor.base"]],["ext.visualEditor.core",1569393900,["unicodejs","papaparse","jquery.uls.data","ext.visualEditor.base"]],["ext.visualEditor.core.desktop",1569393900,["ext.visualEditor.core"]],["ext.visualEditor.core.mobile",1569393900,["ext.visualEditor.core"]],["ext.visualEditor.mwcore",1569393900,["ext.visualEditor.core","mediawiki.Title","mediawiki.action.history.diff","mediawiki.user","mediawiki.util","mediawiki.jqueryMsg","jquery.autoEllipsis","jquery.byteLimit"]],["ext.visualEditor.mwformatting",1569393900,[
"ext.visualEditor.mwcore"]],["ext.visualEditor.mwimage.core",1569393900,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwimage",1569393900,["ext.visualEditor.mwimage.core"]],["ext.visualEditor.mwlink",1569393900,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwmeta",1569393900,["ext.visualEditor.mwcore","ext.visualEditor.mwlink"]],["ext.visualEditor.mwreference.core",1569393900,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwreference",1569393900,["ext.visualEditor.mwreference.core","ext.visualEditor.mwtransclusion"]],["ext.visualEditor.mwtransclusion.core",1569393900,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwtransclusion",1569393900,["ext.visualEditor.mwtransclusion.core","mediawiki.jqueryMsg","mediawiki.language"]],["ext.visualEditor.language",1569393900,["ext.visualEditor.core","mediawiki.language.names"]],["ext.visualEditor.mwalienextension",1569393900,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwgallery",1569393900,["ext.visualEditor.mwcore"]],[
"ext.visualEditor.experimental",1202225400,["ext.visualEditor.language","ext.visualEditor.mwalienextension"]],["ext.visualEditor.wikia.viewPageTarget.init",1569393900,["jquery.client","jquery.byteLength","mediawiki.Title","mediawiki.Uri","mediawiki.util","user.options","ext.visualEditor.track"]],["ext.visualEditor.wikia.oasisViewPageTarget",1569393900,["ext.visualEditor.viewPageTarget"]],["ext.visualEditor.wikia.core",1569393900,["ext.visualEditor.core.desktop","ext.visualEditor.mwimage","ext.visualEditor.mwmeta"]],["ext.closeMyAccount",1569393900,[],null,"local",["sass"]],["ext.TwitterTag",1569393900],["ext.wikia.VKTag",1569393900],["ext.ArticleVideo.jw",1569393900],["ext.fandomComMigration",1202225400],["ext.wikiaOrgMigration",1202225400],["ext.wikia.CategoryPage3.categoryLayoutSelector.scripts",1569393900],["ext.hydralytics.styles",1569393900,[],null,"local",["sass"]],["ext.hydralytics.scripts",1569393900,["mediawiki.language"]],["ext.maps.common",1569393900,[],"ext.maps"],[
"ext.maps.coord",1569393900,[],"ext.maps"],["ext.maps.resizable",1202225400,["jquery.ui.resizable"],"ext.maps"],["mapeditor",1569393900,["ext.maps.common","jquery.ui.autocomplete","jquery.ui.slider","jquery.ui.dialog"],"ext.maps"],["ext.maps.services",1569393900,["ext.maps.common","ext.maps.coord"],"ext.maps"],["ext.maps.googlemaps3",1569393900,["ext.maps.common"],"ext.maps"],["ext.maps.gm3.markercluster",1569393900,[],"ext.maps"],["ext.maps.gm3.markerwithlabel",1569393900,[],"ext.maps"],["ext.maps.gm3.geoxml",1569393900,[],"ext.maps/geoxml3"],["ext.maps.gm3.earth",1569393900,[],"ext.maps"],["ext.maps.openlayers",1569393900,["ext.maps.common"],"ext.maps"],["ext.maps.leaflet",1569393900,["ext.maps.common"],"ext.maps"],["ext.maps.leaflet.fullscreen",1569393900,["ext.maps.leaflet"],"ext.maps"],["ext.maps.leaflet.markercluster",1569393900,["ext.maps.leaflet"],"ext.maps"],["ext.maps.leaflet.providers",1569393900,["ext.maps.leaflet"],"ext.maps"]]);mw.config.set({"wgLoadScript":"/es/load.php"
,"debug":!1,"skin":"oasis","stylepath":"https://slot1-images.wikia.nocookie.net/__cb1569435957212/common/skins","wgUrlProtocols":"\\/\\/|ftp\\:\\/\\/|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|svn\\:\\/\\/|telnet\\:\\/\\/|worldwind\\:\\/\\/|xmpp\\:","wgArticlePath":"/es/wiki/$1","wgScriptPath":"/es","wgScriptExtension":".php","wgScript":"/es/index.php","wgVariantArticlePath":!1,"wgActionPaths":{},"wgServer":"https://mlp.fandom.com","wgUserLanguage":"es","wgContentLanguage":"es","wgVersion":"1.19.24","wgEnableAPI":!0,"wgEnableWriteAPI":!0,"wgDefaultDateFormat":"dmy","wgMonthNames":["","enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],"wgMonthNamesShort":["","ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],"wgMainPageTitle":"My Little Pony: La Magia de la Amistad Wiki","wgFormattedNamespaces":{"-2":"Medio"
,"-1":"Especial","0":"","1":"Discusión","2":"Usuario","3":"Usuario discusión","4":"My Little Pony - La Magia de la Amistad Wiki","5":"My Little Pony - La Magia de la Amistad Wiki discusión","6":"Archivo","7":"Archivo discusión","8":"MediaWiki","9":"MediaWiki discusión","10":"Plantilla","11":"Plantilla discusión","12":"Ayuda","13":"Ayuda discusión","14":"Categoría","15":"Categoría discusión","110":"Foro","111":"Foro Discusión","112":"Chat","113":"Chat talk","500":"Usuario Blog","501":"Usuario Blog Comentario","502":"Blog","503":"Blog Discusión","828":"Módulo","829":"Módulo discusión","1200":"Muro","1201":"Hilo","1202":"Bienvenida del Muro","2000":"Subforo","2001":"Tema del foro","2002":"Tema"},"wgNamespaceIds":{"medio":-2,"especial":-1,"":0,"discusión":1,"usuario":2,"usuario_discusión":3,"my_little_pony_-_la_magia_de_la_amistad_wiki":4,"my_little_pony_-_la_magia_de_la_amistad_wiki_discusión":5,"archivo":6,"archivo_discusión":7,"mediawiki":8,"mediawiki_discusión":9,
"plantilla":10,"plantilla_discusión":11,"ayuda":12,"ayuda_discusión":13,"categoría":14,"categoría_discusión":15,"foro":110,"foro_discusión":111,"chat":112,"chat_talk":113,"usuario_blog":500,"usuario_blog_comentario":501,"blog":502,"blog_discusión":503,"módulo":828,"módulo_discusión":829,"muro":1200,"hilo":1201,"bienvenida_del_muro":1202,"subforo":2000,"tema_del_foro":2001,"tema":2002,"imagen":6,"imagen_discusión":7,"usuaria":2,"usuaria_discusión":3,"forum":110,"forum_talk":111,"message_wall":1200,"thread":1201,"message_wall_greeting":1202,"board":2000,"board_thread":2001,"topic":2002,"blog_talk":503,"user_blog":500,"user_blog_comment":501,"image":6,"image_talk":7,"media":-2,"special":-1,"talk":1,"user":2,"user_talk":3,"project":4,"project_talk":5,"file":6,"file_talk":7,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"module":828,"module_talk":829},"wgSiteName":"My Little Pony: La Magia de la Amistad Wiki",
"wgFileExtensions":["png","gif","jpg","jpeg","ico","pdf","svg","odt","ods","odp","odg","odc","odf","odi","odm","ogg","ogv","oga"],"wgDBname":"esmlp","wgFileCanRotate":!0,"wgAvailableSkins":{"oasis":"Oasis","wikiamobile":"WikiaMobile"},"wgExtensionAssetsPath":"/es/extensions","wgCookiePrefix":"wikicities","wgResourceLoaderMaxQueryLength":-1,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":" %!\"$\x26\'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgSassParams":{"background-dynamic":"true","background-image":"https://vignette.wikia.nocookie.net/mlp/images/5/50/Wiki-background/revision/latest?cb=20190601202607\x26path-prefix=es","background-image-height":"800","background-image-width":"1700","color-body":"#ace9f1","color-body-middle":"#ccf3fc","color-buttons":"#006cb0","color-community-header":"#006cb0","color-header":"#5f3e8e","color-links":"#4b6ed2","color-page":"#f5fbff","oasisTypography":1,"page-opacity":"100","widthType":0},"wgFandomBaseDomain":"fandom.com",
"wgWikiaOrgBaseDomain":"wikia.org","wgWikiaBaseDomainRegex":"((wikia\\.(com|org)|fandom\\.com)|(wikia|fandom)-dev\\.(com|us|pl))","wgServicesExternalDomain":"https://services.fandom.com/","wgRecommendedVideoABTestPlaylist":"","wgJSMessagesCB":"1569435957212.0.0","wgVisualEditorConfig":{"disableForAnons":!1,"preferenceModules":{"visualeditor-enable-experimental":"ext.visualEditor.experimental","visualeditor-enable-language":"ext.visualEditor.language"},"namespaces":[0,"112",2,14,4],"pluginModules":["ext.visualEditor.wikia.core"],"defaultUserOptions":{"betatempdisable":0,"enable":1,"defaultthumbsize":180,"visualeditor-enable-experimental":0,"visualeditor-enable-language":0},"blacklist":{"msie":null,"android":[["\x3c",3]],"firefox":[["\x3c=",14]],"opera":[["\x3c",12]],"blackberry":null,"silk":null},"skins":["oasis"],"tabPosition":"before","tabMessages":{"edit":null,"editsource":"visualeditor-ca-classiceditor","create":null,"createsource":"visualeditor-ca-classiceditor",
"editlocaldescriptionsource":"visualeditor-ca-editlocaldescriptionsource","createlocaldescriptionsource":"visualeditor-ca-createlocaldescriptionsource","editsection":null,"editsectionsource":"visualeditor-ca-editsource-section","editappendix":null,"editsourceappendix":null,"createappendix":null,"createsourceappendix":null,"editsectionappendix":null,"editsectionsourceappendix":null},"showBetaWelcome":!1,"enableTocWidget":!1},"wgCommunityPageDisableTopContributors":!1});mw.loader.state({"jquery":"ready"});window.preMwLdrSt&&mw.loader.state(window.preMwLdrSt);if(window.preMwLdrStA){for(var i=0;i<window.preMwLdrStA.length;i++)mw.loader.state(window.preMwLdrStA[i]);};};if(isCompatible()){document.write("\x3cscript src=\"https://slot1-images.wikia.nocookie.net/__load/-/debug%3Dfalse%26lang%3Des%26only%3Dscripts%26skin%3Doasis%26version%3D1569435957212-20190925T064500Z/jquery,mediawiki\"\x3e\x3c/script\x3e");}delete isCompatible;;

/* cache key: esmlp:resourceloader:filter:minify-js:7:f9a77ada2dee5461ed904507f3df1ef6 */