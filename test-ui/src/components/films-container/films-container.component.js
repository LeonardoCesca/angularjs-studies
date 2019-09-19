(function () {
  "use strict";

  angular
    .module('app')
    .component('filmsContainer', {
      templateUrl: "./src/components/films-container/films-container.html",
      controller: filmsContainerController,
      controllerAs: 'vm',
    });

  function filmsContainerController(
    filmsApiFactory
  ) {
    const vm = this;

    vm.films = undefined,
    vm.erros = undefined,

    vm.$onInit = init;

    function init() {
      filmsApiFactory
        .getFilms()
        .then(res => this.films = res.data.results)
        .catch(err => console.log(err))
        .finally(() => console.log(this.films));
    }

  }

})();
