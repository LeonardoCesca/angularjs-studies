(function() {
    "use strict";

angular.module('app')
    .component('uiHome', {
        templateUrl: "./src/components/home/home.html",
        controller: 'controllerPei',
        controllerAs: 'vm',
    });

    function controllerPei() {
        this.vm = this;
        vm.$onInit = onInit;

        function onInit() {
            console.log('pepeca');
        }
    }
    
})();
