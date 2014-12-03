sap.ui.controller("view.detail.Mail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mvcsimple2.App
*/
	onInit: function() {
		 
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mvcsimple2.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mvcsimple2.App
*/
	onAfterRendering: function() {
		//this.getView().byId("map_canvas").addStyleClass("myMap");
//		 var mapOptions = {
//		          center: new google.maps.LatLng(-34.397, 150.644),
//		          zoom: 8,
//		          mapTypeId: google.maps.MapTypeId.ROADMAP
//		        };
//		        var map = new google.maps.Map(this.getView().byId("map_canvas"),
//		            mapOptions);
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mvcsimple2.App
*/
//	onExit: function() {
//
//	}

});