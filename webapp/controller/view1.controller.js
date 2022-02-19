sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("layout.controller.view1", {
            onInit: function () {
                that = this;
                this.oRouter = this.getOwnerComponent().getRouter();
                var oForm = new sap.ui.layout.form.Form("idForm", {
                    title: new sap.ui.core.Title({
                        text: "Address"
                    }),
                    editable: true,
                    layout: new sap.ui.layout.form.ResponsiveGridLayout({
                        singleContainerFullSize: false
                    }),
                    formContainers: new sap.ui.layout.form.FormContainer({
                        formElements: [
                            new sap.ui.layout.form.FormElement({
                                fields: [
                                    new sap.m.Input("idInput1", {
                                        placeholder: "First Name"
                                    }),
                                    new sap.m.Input("idInput2", {
                                        placeholder: "Last Name"
                                    })
                                ],
                                label: "Name"
                            }),
                            new sap.ui.layout.form.FormElement({
                                fields: [
                                    new sap.m.Input("idInput3", {
                                        placeholder: "Street Name",
                                    }),
                                    new sap.m.Input("idInput4", {
                                        placeholder: "House Number",
                                        layoutData: new sap.ui.layout.GridData({
                                            span: "XL1 L2 M2 S4"
                                        })
                                    })
                                ],
                                label: "Street/Number"
                            }),
                            new sap.ui.layout.form.FormElement({
                                fields: [
                                    new sap.m.Input("idInput5", {
                                        placeholder: "ZipCode",
                                        layoutData: new sap.ui.layout.GridData({
                                            span: "XL1 L2 M2 S4"
                                        })
                                    }),
                                    new sap.m.Input("idInput6", {
                                        placeholder: "City"
                                    })
                                ],
                                label: "ZipCode/City"
                            }),
                            new sap.ui.layout.form.FormElement({
                                fields: [
                                    new sap.m.Input("idInput7", {
                                        placeholder: "Country"
                                    })
                                ],
                                label: "Country"
                            }),
                            new sap.ui.layout.form.FormElement({
                                fields: [
                                    new sap.m.Input("idInput8", {
                                        placeholder: "Primary Phone No"
                                    }),
                                    new sap.m.Input("idInput9", {
                                        placeholder: "Alternate No"
                                    })
                                ],
                                label: "Contact Number"
                            })
                        ]
                    })
                });
                this.byId("idPage1").addContent(oForm);
            }
        });
    });