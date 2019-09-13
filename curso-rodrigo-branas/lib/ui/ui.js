angular.module("ui", []);

angular.module("ui").run(function ($templateCache) {
    $templateCache.put("view/accordion.html",'<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpen" ng-transclude></div>');
});

angular.module("ui").directive("uiAccordions", function() {
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

angular.module("ui").directive("uiAccordion", function() {
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