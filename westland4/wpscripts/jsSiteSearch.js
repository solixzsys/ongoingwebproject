function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,bgColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("swr=true") != -1)
	return;
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?" );
var arrURLParams = arrParams[1].split("&" );
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=" );
var sValue = decodeURIComponent(sParam[1]);
if( decodeURIComponent(sParam[0]) == frameObjectName)
	sTerms = sValue;
if( decodeURIComponent(sParam[0]) == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>" ); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!doctype html>" );
d.write("<html lang=\"en\">" );
d.write("<head>" );
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" );
d.write("</head>" );
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: "+bgColour+";\">" );
d.write("<div id=\"wpSearchResults\"></div>" );
d.write("<script type=\"text/javascript\">" );
d.write("var wordMap = new Array(\" single room suite vestibulum semper enim eros vitae arcu aliquam erat volutpat praesent odio nulla relaxation corner vestibulum eleifend nulla suspendisse potenti turpis nisi venenatis double suites velit orci bibendum eget molestie sagittis nullam westland hotels suites 40-room fashionable sophisticated hotel located lagos mainland ayolaja street ikotun nigeria inspired city read more about welcome westland hotels contact 08037198391 email westland_athotels yahoo \",\" about hotel management team westland hotels suites 40-room fashionable sophisticated hotel located lagos mainland ayolaja street ikotun nigeria arguably most exquisite boutique area immensely stylish aesthetically pleasing located serene environment detailed with soothing ambience conceived nourish that appetite taste class inspired hustling buling alimosho business people would certainly need conducive rest individually decorated rooms facilities tastefully finished deluxe craft your comfort relaxation sole consideration services superb very personalised \",\" nullam duis lorem maecenas read more condimentum vulputate morbi nisl eros dignissim nulla quis facilisis gravida vivamus sapien praesent proin pede diam curabitur felis erat tempus placerat pellentesque purus diam nunc class aptent osqu litora torquent conubia nostra nulla morbi auris interdum porta pellentesque tincidunt dolor dignissim mollis justo sapien iaculis pede lacus nisl amet metus fusce vitae varius tristique suspendisse lorem rnare vestibulum semper enim eros arcu aliquam volutpat praesent odio suscipit rhoncus porttitor aenean hendrerit vestibulum eleifend nulla potenti turpis nisi venenatis accumsan imperdiet laoreet mattis eget donec ornare aliquet pulvinar congue condimentum blandit elementum quis orci ante massa lacinia malesuada convallis augue ipsum primis faucibus luctus ultrices posuere cubilia curae proin aliquam lectus sollicitudin magna sagittis velit lobortis quisque molestie bibendum feugiat facilisis scelerisque fermentum pharetra consequat tellus ullamcorper mauris habitasse platea dictumst mauris rutrum pretium elit ligula venture catalyst nullam phasellus quam dictum libero latest nostrum \",\" \",\" eget sapien vitae massa rhoncus lacinia nullam metus aliquam semper phasellus tincidunt ante ultrices morbi pellentesque \",\" nullam lorem sapien tempus fringilla elementum purus duis molestie pede vivamus quis odio amet libero sodales tincidunt metus vitae lectus ullamcorper dignissim suspendisse praesent turpis justo aliquet accumsan posuere morbi pretium lacus cras donec laoreet elit sociis natoque penatibus magnis parturient montes nascetur ridiculus address ayolaja street ikotun lagos nigeria 7890 7892 email westlandat_hotels yahoo westlandhotelsandsuite contact find \",\" 0000 nulla vestibulum eleifend nulla suspendisse potenti aliquam turpis nisi venenatis accumsan imperdiet laoreet lacus purus mattis eget fermentum congue tortor aenean nibh nullam hendrerit viverra dolor vestibulum fringilla lectus malesuada enim adipiscing ligula bibendum cras risus varius feugiat faucibus vitae massa nunc gravida nonummy felis etiam suscipit amet sodales neque erat porttitor rutrum quis proin pede facilisis phasellus sapien duis diam urna iaculis vehicula donec nisl volutpat integer lobortis quam magna consequat libero ante quisque commodo tellus lorem morbi consectetuer mauris odio euismod lorem ipsum elit eros dignissim convallis augue primis orci luctus ultrices posuere cubilia curae aliquam tempus sollicitudin metus sagittis velit fusce rhoncus praesent semper molestie scelerisque pharetra ullamcorper placerat auctor tincidunt habitasse platea dictumst mauris pretium dictum dapibus pellentesque arcu ultricies maecenas curabitur pellentesque nunc class aptent taciti sociosqu litora torquent conubia nostra inceptos hymenaeos justo vulputate egestas tristique lacinia interdum porta condimentum blandit mollis management solutions your business neque massa morbi \",\" \" );" );
d.write("var pageMap = new Array(\"Home\",\"About Us\",\"News\",\"Facilities\",\"Gallery\",\"Contact Us\",\"News Article\",\"Search Results\" );" );
d.write("var linkMap = new Array(\"index.html\",\"about.html\",\"news.html\",\"services.html\",\"gallery.html\",\"contact.html\",\"article.html\",\"search.html\" );" );
d.write("var preMap = new Array(\"SINGLE ROOM  AND SUITE  Vestibulum semper enim non eros  Sed vitae arcu  Aliquam erat volutpat  Praesent odio   Nulla > RELAXATION  CORNER Nulla vestibulum eleifend nulla  Suspendisse potenti  Aliquam\",\"ABOUT US  OUR HOTEL MANAGEMENT TEAM Westland Hotels and Suites is a 40-room fashionable and sophisticated hotel located on the Lagos Mainland at 1-3 Ayolaja Street  Ikotun Lagos Nigeria  Arguably the \",\"NULLAM DUIS LOREM MAECENAS  READ MORE  CONDIMENTUM VULPUTATE  READ MORE  MORBI NISL EROS DIGNISSIM  READ MORE  NULLA QUIS FACILISIS GRAVIDA  READ MORE  VIVAMUS VEL SAPIEN PRAESENT QUIS PROIN PEDE GRAV\",\"\",\"In eget sapien vitae massa rhoncus lacinia  Nullam at leo  metus aliquam semper  Phasellus tincidunt  ante nec  lacinia ultrices  Morbi pellentesque   \",\"Nullam lorem sapien  tempus ac  fringilla at  elementum sed  purus  Duis molestie pede  Vivamus quis odio sit amet libero sodales tincidunt  Nam sit amet metus vitae lectus ullamcorper dignissim  Susp\",\"00 00 0000 Nulla vestibulum eleifend nulla  Suspendisse potenti  Aliquam turpis nisi  venenatis non  accumsan nec  imperdiet laoreet  lacus  In purus est  mattis eget  imperdiet nec  fermentum congue \",\"\" );" );
d.write("function doNav(ind)" );
d.write("{" );
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\" );" );
else
d.write("		 parent.window.location.href=linkMap[ind];" );
d.write("}" );
d.write("function wpDoSearch(searchTerms){" );
d.write("var terms = searchTerms.split(\" \" );" );
d.write("if (terms==\"\") return;" );
d.write("var results = \"\";" );
d.write("var resultscount = 0;" );
d.write("for (var i=0; i<wordMap.length; i++)" );
d.write("{" );
d.write("			var found=true;" );
d.write("			for (var j=0; j<terms.length; j++)" );
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;" );
d.write("			if (found)" );
d.write("			{" );
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\" );\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";" );
d.write("				 resultscount++;" );
d.write("			}" );
d.write("}" );
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;" );
d.write("}" );
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","" );
};
d.write("wpDoSearch(\""+sTerms+"\" );" );
d.write("</script>" );
d.write("</body></html>" );
d.close();
}