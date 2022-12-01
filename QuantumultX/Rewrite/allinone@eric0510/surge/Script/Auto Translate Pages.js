// ==UserScript==
// @name        Auto Translate Pages
// @namespace   googletranslationbar
// @description Translate all pages Automatic
// @include     http*
// @include     https*
// @license MIT
// @include     /^.*translate.google.com.*/
// @include     /^.*translate.googleapis.com.*/
// @version     1.1
// @grant       none
// @noframes
// ==/UserScript==

var amazonDomain;
for (amazonDomain = window.location.hostname.split("."); 2 < amazonDomain.length;){
    amazonDomain.shift();
}

amazonDomain = ";domain=" + amazonDomain.join(".");


document.cookie = "googtrans=/auto/en; expires=Thu, 01-Jan-2099 22:22:20 GMT; path=/" + amazonDomain;
document.cookie = "googtrans=/auto/en; expires=Thu, 01-Jan-2099 22:22:20 GMT; path=/";

if (window.top != window.self)  //don't run on frames or iframes
    return;
  var d=document;
  
  function gtranslateproxy() {
  b=d.body;
  var o=d.createElement('scri'+'pt');
  o.setAttribute('src','//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
  o.setAttribute('type','text/javascript');
  b.appendChild(o);
  var v=b.insertBefore(d.createElement('div'),b.firstChild);
  v.id='google_translate_element';
  v.style.display='none';
  var p=d.createElement('scri'+'pt');
  p.text='function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:""},"google_translate_element");}';
  p.setAttribute('type','text/javascript');
  b.appendChild(p);
  
  }
  
  gtranslateproxy();
