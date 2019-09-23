(function() {
    "use strict";
    
    angular
    .module("app")
    .component("info", {
        templateUrl: "./src/components/info/info.html",
        bindings: {
            abrirModal: "=",
        },
        controllerAs: "vm",
    })
})();