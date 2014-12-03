sap.ui.controller("myapplication.myview2", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf myapplication.myview2
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf myapplication.myview2
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf myapplication.myview2
*/
	onAfterRendering: function() {
		//this.getView().byID("map_canvas");
		
		var mapOptions = {
		          center: new google.maps.LatLng(-34.397, 150.644),
		          zoom: 8,
		          mapTypeId: google.maps.MapTypeId.ROADMAP
		        };
		        var map = new google.maps.Map(this.getView().byId("map_canvas"),
		            mapOptions);
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf myapplication.myview2
*/
//	onExit: function() {
//
//	}

});