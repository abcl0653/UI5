sap.ui.jsview("myapplication.myview2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myapplication.myview2
	*/ 
	getControllerName : function() {
		return "myapplication.myview2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myapplication.myview2
	*/ 
	createContent : function(oController) {
		var button1 = new sap.m.Button("bt1",{
			text:"Test button"
		});
		//return button1;
		
		var vbox = new sap.m.VBox("VBOX",{
			 fitContainer: true, 
			 justifyContent: "Center",
			 alignItems: "Center"
		});
		var oOuterBox = new sap.m.HBox("map_canvas",{
			 fitContainer: true, 
			 justifyContent: "Center",
			 alignItems: "Center",
			 height:"500px",
			 width:"100%"
		});
		
		vbox.addItem(oOuterBox);
		
		var bt = new sap.m.Button("bt");
		
		this.page = new sap.m.Page("main_page",{
			title:"Google Map Test",
			content:[vbox,bt]
		});
		return this.page;
	}

});
