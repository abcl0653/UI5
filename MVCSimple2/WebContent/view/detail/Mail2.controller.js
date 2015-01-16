sap.ui.controller("view.detail.Mail2", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.detail.Mail2
	 */
	onInit : function() {

		this.getView().byId("map_canvas").addStyleClass("myMap");

		this.router = sap.ui.core.UIComponent.getRouterFor(this);// Get
																	// router
																	// for the
																	// controller
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},
	
	_handleRouteMatched : function(evt) {
		var param = evt.getParameter("name"), sViewId = evt
				.getParameter("arguments").viewId;

		if ("mail2" !== param) {
			return;
		}

		this.getView().bindElement("/items/" + sViewId);
		
		var latitude = this.getView().byId("latitude").getText();
		var longitude = this.getView().byId("longitude").getText();
		
		var mapOptions = {
				center : new google.maps.LatLng(latitude, longitude),
				zoom : 8,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
		var map = new google.maps.Map(this.getView().byId("map_canvas")
					.getDomRef(), mapOptions);
		
		var marker = new google.maps.Marker(
				{
					map:map,
					position:new google.maps.LatLng(latitude, longitude)
				});
		
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.detail.Mail2
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.detail.Mail2
	 */
	onAfterRendering : function() {
//		var mapOptions = {
//			center : new google.maps.LatLng(-34.397, 150.644),
//			zoom : 8,
//			mapTypeId : google.maps.MapTypeId.ROADMAP
//		};
//		var map = new google.maps.Map(this.getView().byId("map_canvas")
//				.getDomRef(), mapOptions);
	},


/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf view.detail.Mail2
 */
// onExit: function() {
//
// }
});