// ==UserScript==
// @name         iOS-debugging-tool
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  手机调试工具（eruda或vConsole）
// @author       Eric
// @include      *
// @license      MIT
// ==/UserScript==

(function() {
	var mobileConsole = {
		eruda: function() { //eruda
			let url = "//cdn.bootcdn.net/ajax/libs/eruda/2.4.1/eruda.min.js";
			this.load(url, function() {
				eruda.init();
			})
		},
		vConsole: function() { //vConsole
			let url = "//unpkg.com/vconsole@latest/dist/vconsole.min.js";
			this.load(url, function() {
				var vConsole = new window.VConsole();
			})
		},
		load: function(url, callback) { //用于加载js
			var script = document.createElement("script");
			script.type = 'text/javascript';
			script.async = 'async';
			script.src = url;
			document.body.appendChild(script);
			if (script.readyState) { //IE
				script.onreadystatechange = function() {
					if (script.readyState == 'complete' || script.readyState == 'loaded') {
						script.onreadystatechange = null;
						callback();
					}
				}
			} else { //非IE
				script.onload = function() {
					callback();
				}
			}
		}
	}
	mobileConsole.vConsole()
})();
