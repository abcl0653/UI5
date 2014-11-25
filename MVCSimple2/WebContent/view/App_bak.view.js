sap.ui.jsview("view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mvcsimple2.App
	*/ 
	getControllerName : function() {
		return "view.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mvcsimple2.App
	*/ 
	createContent : function(oController) {
		var textview1 = new sap.ui.commons.TextView("textview1",{
			text:"Hello World!"
		});
		
		return textview1;
	
		return this.app;
		
	
	}

});
