sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("layout.controller.view1", {
            onInit: function () {
                that = this;
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oModel = this.getOwnerComponent().getModel();
                this.buttonTogle(true);
                var oForm = new sap.ui.layout.form.Form("idForm", {
                    title: new sap.ui.core.Title({
                        text: "Address"
                    }),
                    editable: true,
                    layout: new sap.ui.layout.form.ResponsiveGridLayout({
                        singleContainerFullSize: false
                    }),
                    formContainers: new sap.ui.layout.form.FormContainer("idFCont", {
                        formElements: [
                            new sap.ui.layout.form.FormElement({
                                fields: [
                                    new sap.m.Input("idInput1", {
                                        placeholder: "First Name",
                                        value: "{/employee/0/fName}",
                                        editable: "{/editF}"
                                    }),
                                    new sap.m.Input("idInput2", {
                                        placeholder: "Last Name",
                                        value: "{/employee/0/lName}",
                                        editable: "{/editF}"
                                    })
                                ],
                                label: "Name"
                            }),
                            new sap.ui.layout.form.FormElement({
                                fields: [
                                    new sap.m.Input("idInput3", {
                                        placeholder: "Street Name",
                                        value: "{/employee/0/sName}",
                                        editable: "{/editF}"
                                    }),
                                    new sap.m.Input("idInput4", {
                                        placeholder: "House Number",
                                        layoutData: new sap.ui.layout.GridData({
                                            span: "XL1 L2 M2 S4"
                                        }),
                                        value: "{/employee/0/hNumber}",
                                        editable: "{/editF}"
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
                                        }),
                                        value: "{/employee/0/zCode}",
                                        editable: "{/editF}"
                                    }),
                                    new sap.m.Input("idInput6", {
                                        placeholder: "City",
                                        value: "{/employee/0/city}",
                                        editable: "{/editF}"
                                    }),

                                ],
                                label: "ZipCode/City"
                            }),
                            new sap.ui.layout.form.FormElement({
                                fields: [
                                    new sap.m.Input("idInput7", {
                                        placeholder: "Country",
                                        value: "{/employee/0/country}",
                                        editable: "{/editF}"
                                    }),
                                ],
                                label: "Country"
                            }),
                            new sap.ui.layout.form.FormElement({
                                fields: [
                                    new sap.m.Input("idInput8", {
                                        placeholder: "Primary Phone No",
                                        value: "{/employee/0/pNo}",
                                        editable: "{/editF}"
                                    }),
                                    new sap.m.Input("idInput9", {
                                        placeholder: "Alternate No",
                                        value: "{/employee/0/sNo}",
                                        editable: "{/editF}"
                                    })
                                ],
                                label: "Contact Number"
                            })
                        ]
                    })
                });
                this.byId("idPage1").addContent(oForm);
            },
            buttonTogle: function (edit) {
                this.byId("idBtn6").setVisible(edit);
                this.byId("idBtn7").setVisible(!edit);
                this.byId("idBtn8").setVisible(!edit);
            },
            onEdit: function () {
                this.buttonTogle(false);
                this.oModel.setProperty("/editF", true);
            },
            onCancel: function () {
                this.oModel.setProperty("/editF", false);
                this.buttonTogle(true);
            },
            onSave: function () {
                var oEmployee = this.oModel.getProperty("/employee");
            }
        });
    });