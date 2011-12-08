(function(global,config){
	var wrlc = config.wrlcNS;
	
	function wrlc() {
			this.jsList = {	
				jsA: { name : "jsA", url : "/jdocgui/docgui/js/plugins/doc-metas/js/jquery.docgui.docMetas.js", isNotLoaded : true, isNotLocked : true,
					preLoadActivity : function() { return true; }, postLoadActivity : function() { return true; }, depon : [ "jquery" ] },
				jsB: { name : "ricNAssegno", url : "/jdocgui/docgui/js/plugins/ric-nassegno/js/jquery.docgui.ricNAssegno.js", isNotLoaded : true, isNotLocked : true,
					preLoadActivity : function() { return true; }, postLoadActivity : function() { return true; }, depon : [ "baseWidget" ] }
			};
			
			this.cssList = {
				cssA : { name : "cssA", url : "/jdocgui/docgui/js/plugins/doc-metas/css/docMetas.css", isNotLoaded : true, isNotLocked : true },
				cssB : { name : "cssB", url : "/jdocgui/docgui/js/plugins/docgui-widget/css/docgui-table.css", isNotLoaded : true, isNotLocked : true },
			};
			
			this.htmlList = {
				htmlA : { url : "/jdocgui/docgui/views/plugins/docMetas.html" },
				htmlB : { url : "/jdocgui/docgui/js/plugins/doc-metas/html/docMetas.html" }
			};
	};
	
	global[wrlc] = new wrlc();
})(window,{ wrlcNS : "wrlc" });
