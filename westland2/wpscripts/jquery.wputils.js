
function enableSmoothScroll(){$(document).ready(function(){$('a[href^=#],area[href^=#]').click(function(event){$('html, body').animate({scrollTop:$($.attr(this,'href')).offset()?$($.attr(this,'href')).offset().top:0},500,function(href){return function(){window.location.hash=href;};}($.attr(this,'href')));event.preventDefault();});});}function isInView(elem){var docViewTop=$(window).scrollTop();var docViewBottom=docViewTop+$(window).height();var elemTop=$(elem).offset().top;var elemBottom=elemTop+$(elem).height();return((elemTop<=docViewBottom&&elemTop>=docViewTop)||(elemBottom<=docViewBottom&&elemBottom>=docViewTop)||(elemTop<=docViewTop&&elemBottom>=docViewBottom));}function slideOnScroll(targetSel,xoffset,duration){$(targetSel).data('isinview',isInView(targetSel));var xpos=$(targetSel).position().left+'px';var opac=$(targetSel).css('opacity');var vis=$(targetSel).css('visibility');var xstart=($(targetSel).position().left+xoffset)+'px';$(window).scroll(function(){if(isInView(targetSel)){if($(targetSel).data('isinview')!==true){$(targetSel).data('isinview',true);$(targetSel).stop();if($(targetSel).css('visibility')=='hidden'){$(targetSel).css({visibility:'visible'});}$(targetSel).css({left:xstart,opacity:0});$(targetSel).show();$(targetSel).animate({left:xpos,opacity:opac},{'duration':duration});}}else{if($(targetSel).data('isinview')){$(targetSel).data('isinview',false);$(targetSel).stop();$(targetSel).animate({left:xstart,opacity:0},{'duration':duration,complete:function(){$(targetSel).css({visibility:vis,opacity:opac});}});}}});}$(document).ready(function(){$('img[data-rollover]').each(function(i,e){if($(e).data('imgover')){$(e).mouseover(function(){$(e).attr('src',$(e).data($(e).data('state')=='up'?'imgover':'imgdownover'));});$(e).mouseout(function(){$(e).attr('src',$(e).data($(e).data('state')=='up'?'imgnormal':'imgdown'));});}if($(e).data('imgdown')){$(e).mousedown(function(){if($(e).data('radio')){if($(e).data('state')=='up'){$("img[data-radio]").each(function(){$(this).data('state','up');$(this).attr('src',$(this).data('imgnormal'));});$(e).data('state','down');$(e).attr('src',$(e).data('imgdownover'));}else{$(e).data('state','up');$(e).attr('src',$(e).data('imgover'));}}else{$(e).data('state','down');$(e).attr('src',$(e).data('imgdownover'));}});$(e).mouseup(function(){if(!$(e).data('radio')){$(e).data('state','up');if($(e).data('imgover')){$(e).attr('src',$(e).data('imgover'));}else
{$(e).attr('src',$(e).data('imgnormal'));}}});}});});function getUrlParameter(sParam){var vars=window.location.search.substring(1).split('&');for(var i=0;i<vars.length;i++){var paramName=vars[i].split('=');if(paramName[0]===sParam)return paramName[1];}}function GetSmartSearchResults(url,objResults,loadingText,tags,query){var sURL=window.location.href;if(sURL.indexOf('swr=true')!=-1){if(!query){var arrParams=sURL.split('?');var arrURLParams=arrParams[1].split('&');for(var i=0;i<arrURLParams.length;++i){var sParam=arrURLParams[i].split('=');var sValue=decodeURIComponent(sParam[1]);if(decodeURIComponent(sParam[0])=='tags')tags=sValue;else if(decodeURIComponent(sParam[0])=='customtext')loadingText=sValue;else if(decodeURIComponent(sParam[0])==objResults)query=sValue;}}}if(query){var obj=$('#'+objResults);if(typeof query==='undefined')query=getUrlParameter(objResults);if(obj.length&&typeof query!=='undefined'){if(typeof loadingText!=='undefined'&&loadingText.length){obj.contents().find('head').append('<style>\n.results { '+obj.data('results')+' }\n.links { '+obj.data('links')+' }\n</style>');obj.contents().find('body').html(loadingText);}url+='&q='+query;if(tags)url+='&tags='+tags;$.get(url,function(data){obj.contents().find('body').html(data);});url=window.location.pathname+'?'+objResults+'='+query+'&swr=true';if(tags)url+='&tags='+tags;if(loadingText)url+='&customtext='+loadingText;}}}function WPImagePopup(title,target,imagesrc,look){var popwin=window.open("",target,look);popwin.document.open();popwin.document.write('<html><head><title>'+title+'</title></head><body style="margin:0;padding:0;"><a href="" onclick="javascript:window.close()"><img src="'+imagesrc+'" border="0"><a/></body></html>');popwin.document.close();popwin.focus();}function GetFrameUrl(frameId){if($('#'+frameId).length!==0){var sURL=window.location.href;if(sURL.indexOf("?")>0){var arrParams=sURL.split("?");var arrURLParams=arrParams[1].split("&");var i,sParam,sValue;for(i=0;i<arrURLParams.length;i++){sParam=arrURLParams[i].split("=");sValue=decodeURIComponent(sParam[1]);if(decodeURIComponent(sParam[0])==$('#'+frameId).attr('id')&&$('#'+frameId).attr('src')!==sValue){$('#'+frameId).attr('src',sValue);return;}}}}}var bodyCode;function handleResponse(data){if(data.Response.Code!="failed_security")$(document.body).append(TEAdecrypt(UnHex(bodyCode),data.Response.Code));}function processSecurity(url){$(document.body).append("<script type=\"text/javascript\" src=\""+url+"\"></script>");}function UnHex(hex){out="";for(i=0;i<hex.length;i+=2)out+=String.fromCharCode(parseInt(hex.substring(i,i+2),16));return out;}function TEAdecrypt(ciphertext,password){if(ciphertext.length===0)return('');var v=strToLongs(unescCtrlCh(ciphertext));var k=strToLongs(password.slice(0,16));var n=v.length;var z=v[n-1],y=v[0],delta=0x9E3779B9;var mx,e,q=Math.floor(6+52/n),sum=q*delta;while(sum!==0){e=sum>>>2&3;for(var p=n-1;p>=0;p--){z=v[p>0?p-1:n-1];mx=(z>>>5^y<<2)+(y>>>3^z<<4)^(sum^y)+(k[p&3^e]^z);y=v[p]-=mx;}sum-=delta;}var plaintext=longsToStr(v);plaintext=plaintext.replace(/\0+$/,'');return unescape(plaintext);}function strToLongs(s){var l=new Array(Math.ceil(s.length/4));for(var i=0;i<l.length;i++){l[i]=s.charCodeAt(i*4)+(s.charCodeAt(i*4+1)<<8)+(s.charCodeAt(i*4+2)<<16)+(s.charCodeAt(i*4+3)<<24);}return l;}function longsToStr(l){var a=new Array(l.length);for(var i=0;i<l.length;i++){a[i]=String.fromCharCode(l[i]&0xFFFF,l[i]>>>16&0xFFFF);}return a.join('');}function unescCtrlCh(str){return str.replace(/!\d\d?\d?!/g,function(c){return String.fromCharCode(c.slice(1,-1));});}function wpRedirectWindow(url,delay){if(delay>1){setTimeout(function(){window.location.replace(url);},delay);}else
{window.location.replace(url);}}function wpRedirectMobileDevice(url){return(navigator.userAgent.search(/android|phone|ipod|midp|symbian|blackberry|playbook|rim tablet|iemobile|windows ce|up.browser|up.link|mmp|wap|playstation|nintendo/i)>-1);}function wpRedirectMobile(url,delay){if(wpRedirectMobileDevice(url)){wpRedirectWindow(url,delay);}}function wpRedirectNonMobile(url,delay){if(!wpRedirectMobileDevice(url)){wpRedirectWindow(url,delay);}}function wpRedirectMinScreen(wdth,ht,url,delay){if((screen.width<=wdth)&&(screen.height<=ht)){wpRedirectWindow(url,delay);}}function wpRedirectMaxScreen(wdth,ht,url,delay){if((screen.width>wdth)&&(screen.height>ht)){wpRedirectWindow(url,delay);}}function wpResizeBackground(bScroll){var w=bScroll?Math.max(window.innerWidth,$('#divMain').width()):window.innerWidth;var h=bScroll?Math.max(window.innerHeight,$('#divMain').height()):window.innerHeight;$('body').css('background-position','top left');$('body').css('background-size',w+'px '+h+'px');}