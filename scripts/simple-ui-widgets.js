(function(global,config){
	var suw = config.suwNS;
	var wrl = config.wrlNS;
	var wrc = config.wrlcNS;
	var jqURL = config.jqURL;
	var wrlURL = config.wrlURL;
	var wrlcURL = config.wrlcURL;
	var jQuery;
	
	this[suw] = this[suw] &&  this[suw] || {};
	global[suw]["jqNotLoaded"] = true;
	global[suw]["rlNotLoaded"] = true;
	global[suw]["notInit"] = true;
	global[suw]["ready"] = function(callBack){
		var self = this;
		if ( this.rlNotLoaded || this.notInit || this.jqNotLoaded ){
			setTimeout( function(){self.ready(callBack);},1 );
		}
		else {
			callBack();
		}
	};
	
	if (global.jQuery === undefined || global.jQuery.fn.jquery !== '1.7') {
	    var script_tag = document.createElement('script');
	    script_tag.setAttribute("type","text/javascript");
	    script_tag.setAttribute("charset","utf-8");
	    script_tag.setAttribute("src",jqURL);
	    script_tag.onload = scriptLoadHandler;
	    script_tag.onreadystatechange = function () { /* Same thing but for IE */
	    	if (this.readyState == 'complete' || this.readyState == 'loaded') {
	    		scriptLoadHandler();
	        }
	    };
	    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	} else {
		global[suw].jq = window.jQuery;
	}
	
	function scriptLoadHandler() {
		if ( window.jQuery == undefined ){
			setTimeout(scriptLoadHandler,0 );
		}
		else {
			global[suw]['jq'] = window.jQuery.noConflict(true);
			global[suw].jqNotLoaded = false;
			
			var script_tag = document.createElement('script');
		    script_tag.setAttribute("type","text/javascript");
		    script_tag.setAttribute("charset","utf-8");
		    script_tag.setAttribute("src",wrlURL);
		    script_tag.onload = main;
		    script_tag.onreadystatechange = function () {
		    	if (this.readyState == 'complete' || this.readyState == 'loaded') {
		    		main();
		        }
		    };
		    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
		}
	};
	
	function main() {
		if( global[wrl] === undefined ){
			setTimeout(main,0 );
		}
		else{
			global[suw]['rl'] = global[wrl];
			global[suw].rlNotLoaded = false;
			global[suw]['rl'].loadConfig(global[suw].jq,wrlcURL,
				function(){
					global[suw].notInit = false;
				}		
			);
		}
	};
	
	/* docgui widget proxy functions */
	
	//function(jqsel,wname,{ .. options .. })
	global[suw].widgets = function() {
		var self = this;
		var args = [];
		for( var i = 0; i < arguments.length; i++ ){
			args.push(arguments[i]);
		}
		var jqsel = args.shift();
		var wname = args.shift();
		
		this.ready(function(){
			self.jq(function(){
				self.rl.loadJS(wname,function(){
					self.jq(jqsel)[wname](args[0]);
				});
			});
		});
	};
	
	//function(jqsel,wname,method,{ .. options .. })
	global[suw].trigger = function(jqsel,wname,method) {
		var args = [];
		for( var i = 0; i < arguments.length; i++ ){
			args.push(arguments[i]);
		}
		var jqsel = args.shift();
		var wname = args.shift();
		var method = args.shift();
		global[suw].jq(jqsel)[wname](method,args[0]);
	};

})(window,{
	suwNS : "suw",
	wrlNS : "wrl",
	wrlcNS : "wrlc",
	jqURL : "libs/jquery-1.7.min.js",
	wrlURL : 'libs/web-res-loader.js',
	wrlcURL : 'libs/suw-config.js'
});
