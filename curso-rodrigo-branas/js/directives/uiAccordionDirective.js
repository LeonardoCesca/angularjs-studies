angular.module("listaTelefonica").directive("uiAccordions", function() {
    return {
        controller: function($scope, $element, $attrs) {
            let accordions = [];
            this.registerAccordions = function (scopeAccordion) {
                accordions.push(scopeAccordion)
            };

            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpen = false;
                });
            }
        }
    };
});

angular.module("listaTelefonica").directive("uiAccordion", function() {
    return {
        templateUrl: "view/accordion.html",
        scope: {
            title: "@title"
        },
        transclude: true,
        link: function(scope, element, attrs, ctrl) {
            ctrl.registerAccordions(scope);
            scope.open = function() {
                ctrl.closeAll();
                scope.isOpen = true;
            }
        },
        require: "^uiAccordions"
    };
});