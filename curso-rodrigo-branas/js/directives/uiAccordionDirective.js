angular.module("listaTelefonica").directive("uiAccordion", function() {
    return {
        templateUrl: "view/accordion.html",
        scope: {
            title: "@title"
        }
    };
});