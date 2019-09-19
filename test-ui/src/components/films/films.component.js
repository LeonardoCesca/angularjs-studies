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
            releaseFilm: "="
        },
        controllerAs: 'vm',
    })
})();