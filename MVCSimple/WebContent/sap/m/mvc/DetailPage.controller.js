sap.ui.controller("sap.m.mvc.DetailPage", {

   backTriggered: function() {
       var bus = sap.ui.getCore().getEventBus();
       bus.publish("nav", "back");
   }

});