(function(global,config){
	var wrlc = config.wrlcNS;
	
	function wrlc() {
			this.js = {	
				jsA: { url : "/.../xxx.js" },
				jsB: { url : "/.../yyy.js", depon : [ "jsA" ] }
			};
			
			this.css = {
				cssA : { url : "/.../s.css" },
				cssB : { url : "/.../table.css" },
			};
			
			this.html = {
				htmlA : { url : "/..../s.html" },
				htmlB : { url : "/..../tas.html" }
			};
	};
	
	global[wrlc] = new wrlc();
})(window,{ wrlcNS : "wrlc" });
