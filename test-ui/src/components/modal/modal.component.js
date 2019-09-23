(function() {
    "use strict";
    
    angular
    .module("app")
    .component("modal", {
        templateUrl: "./src/components/modal/modal.html",
        bindings: {
         abrirModal: "=",
         isOpen: "=",
         sinopse: "=",
        },
        controllerAs: 'vm',
    });
})();