(function () {
    "use strict";

    angular
        .module("app")
        .factory("filmsApiFactory", function ($http, config) {

            let _getFilms = function () {
                return $http.get(config.baseUrl + "films");        
            };

            return {
                getFilms: _getFilms
            };
        });
})();