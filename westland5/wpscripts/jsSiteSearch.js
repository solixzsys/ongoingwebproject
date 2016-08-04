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
d.write("var wordMap = new Array(\" single room suite checkout spacious single room relaxation corner relax enjoy yourself watching dstv sport relaxation corner double suites enjoy fantastic double with full 24hrs aircondition westland hotels suites 40-room fashionable sophisticated hotel located lagos mainland ayanlaja street ikotun nigeria inspired city read more about welcome westland hotels \",\" about hotel management team westland hotels suites 40-room fashionable sophisticated hotel located lagos mainland ayanlaja street ile-ibadan stop ijegun ikotun road state nigeria arguably most exquisite bouquet area immensely stylish aesthetically pleasing located serene environment detailed with soothing ambience conceived nourish that appetite taste class inspired hustling buling alimosho business people would certainly need conducive rest individually decorated rooms facilities tastefully finished deluxe craft your comfort relaxation sole consideration services superb very personalized \",\" coming soon \",\" westland hotel facilities coming soon \",\" \",\" from anywhere lagos enter iyana-ipaja board another ikotun drop last stop take bike going ijegun then ile-ibadan saviour bus-stop cross your left side enter ayanlaja street coming from isolo through stop address 1-1-3 ayolaja ikotun-ijegun road nigeria 7890 0706 0738 7892 email westlandhotelsandsuites gmail westlandhotelsandsuite contact find \",\" 0000 nulla vestibulum eleifend nulla suspendisse potenti aliquam turpis nisi venenatis accumsan imperdiet laoreet lacus purus mattis eget fermentum congue tortor aenean nibh nullam hendrerit viverra dolor vestibulum fringilla lectus malesuada enim adipiscing ligula bibendum cras risus varius feugiat faucibus vitae massa nunc gravida nonummy felis etiam suscipit amet sodales neque erat porttitor rutrum quis proin pede facilisis phasellus sapien duis diam urna iaculis vehicula donec nisl volutpat integer lobortis quam magna consequat libero ante quisque commodo tellus lorem morbi consectetuer mauris odio euismod lorem ipsum elit eros dignissim convallis augue primis orci luctus ultrices posuere cubilia curae aliquam tempus sollicitudin metus sagittis velit fusce rhoncus praesent semper molestie scelerisque pharetra ullamcorper placerat auctor tincidunt habitasse platea dictumst mauris pretium dictum dapibus pellentesque arcu ultricies maecenas curabitur pellentesque nunc class aptent taciti sociosqu litora torquent conubia nostra inceptos hymenaeos justo vulputate egestas tristique lacinia interdum porta condimentum blandit mollis management solutions your business neque massa morbi \",\" \" );" );
d.write("var pageMap = new Array(\"Home\",\"About Us\",\"News\",\"Facilities\",\"Gallery\",\"Contact Us\",\"News Article\",\"Search Results\" );" );
d.write("var linkMap = new Array(\"index.html\",\"about.html\",\"news.html\",\"services.html\",\"gallery.html\",\"contact.html\",\"article.html\",\"search.html\" );" );
d.write("var preMap = new Array(\"SINGLE ROOM  AND SUITE  Checkout our spacious single room    RELAXATION  CORNER Relax and enjoy yourself by watching DSTV sport in our relaxation corner  DOUBLE ROOM AND SUITES  Enjoy ou fantastic dou\",\"ABOUT US  OUR HOTEL MANAGEMENT TEAM Westland Hotels and Suites is a 40-room fashionable and sophisticated hotel located on the Lagos Mainland at 1-3  Ayanlaja Street  Ile-Ibadan b stop  Ijegun - Ikotu\",\"Coming Soon     \",\"Westland Hotel Facilities  Coming Soon       \",\"\",\"From Anywhere in Lagos  Enter a bus or cab to Iyana-Ipaja  From Iyana-Ipaja board another bus to Ikotun and drop at last bus stop  Take bike going to Ijegun  then drop at Ile-Ibadan or St  Saviour Bus\",\"00 00 0000 Nulla vestibulum eleifend nulla  Suspendisse potenti  Aliquam turpis nisi  venenatis non  accumsan nec  imperdiet laoreet  lacus  In purus est  mattis eget  imperdiet nec  fermentum congue \",\"\" );" );
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