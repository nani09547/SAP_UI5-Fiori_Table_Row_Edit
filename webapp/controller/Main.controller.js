sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ETM.Testapp.controller.Main", {
		onInit: function () {
		},
		onRowEdit: function(oEvent){
			var sItem = oEvent.getSource().getParent().getParent();
			var Cells = sItem.getCells();
			for( var i = 0 ; i < Cells.length-1 ; i++ ) {
				Cells[i].setEditable(true);
			}
        }
	});
});