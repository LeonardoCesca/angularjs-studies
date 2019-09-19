(function() {
    "use strict";

    angular
    .module("app")
    .component("films", {
        templateUrl: "./src/components/films/films.html",
        bindings: {
            titleFilm:"="
        },
        controllerAs: 'vm',
    })
})();