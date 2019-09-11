angular.module("listaTelefonica").factory("contatosAPI", function($http, config) {
    let _getContatos = function () {
        return $http.get(config.baseUrl + "/contatos");
    }

    let _saveContatos = function (contato) {
        return $http.post(config.baseUrl + "/contatos", contato);
    }

    return {
        getContatos: _getContatos,
        saveContatos: _saveContatos
    };
});