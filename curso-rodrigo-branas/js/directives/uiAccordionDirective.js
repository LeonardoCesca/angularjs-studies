angular.module("listaTelefonica").directive("uiAccordion", function() {
    return {
        templateUrl: "view/accordion.html",
        scope: {
            title: "@title"
        },
        transclude: true,
        link: function(scope, element, attrs, ctrl) {
            scope.open = function() {
                scope.isOpen = !scope.isOpen;
            }
        } 
    };
});