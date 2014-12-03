sap.ui.jsview("view.detail.Mail", {
	getControllerName: function(){
		return "view.detail.Mail";
	},
	createContent : function(oController) {
		var vbox = new sap.m.VBox("VBOX",{
			 fitContainer: true, 
			 justifyContent: "Center",
			 alignItems: "Center"
		});
		var oOuterBox = new sap.m.HBox("map_canvas",{
			 fitContainer: true, 
			 justifyContent: "Center",
			 alignItems: "Center"
		});
		
		vbox.addItem(oOuterBox);
		
		var bt = new sap.m.Button("bt");
		
		this.page = new sap.m.Page("main_page",{
			content:[vbox,bt]
		});
		return this.page;
	}	      
});