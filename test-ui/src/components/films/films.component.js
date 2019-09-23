(function() {
    "use strict";

    angular
    .module("app")
    .component("films", {
        templateUrl: "./src/components/films/films.html",
        bindings: {
            titleFilm:"=",
            directorFilm: "=",
            producerFilm: "=",
            releaseFilm: "=",
            sinopseFilm: "=",
        },
        controller: filmsController,
        controllerAs: 'vm',
    })

    function filmsController() {
        const vm = this; 
            
        vm.isOpen = false;
        vm.abrirModal = abrirModal;

        function abrirModal() {
            vm.isOpen = !vm.isOpen;
        }
    }

})();