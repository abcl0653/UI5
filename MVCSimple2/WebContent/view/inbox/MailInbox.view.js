sap.ui.jsview("view.inbox.MailInbox", {
	getControllerName: function(){
		return "view.inbox.MailInbox";
	},
	createContent: function(oController){
		this.oList = new sap.m.List({
			showUnread:true,
			mode: sap.ui.Device.system.phone ? sap.m.ListMode.None : sap.m.ListMode.SingleSelectMaster,
			itemPress:[oController.onListSelect,oController]
		});
		this.page = new sap.m.Page({
			title:"ALL",
			icon:"{img>/icon/UI5}",
			navButtonText:"Home",
			showNavButton:true,
			navButtonPress:function(){oController.handleNavBack();},
			content:[this.oList]
		});
		
		return this.page;
	}
});
	