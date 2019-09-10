angular.module("listaTelefonica").factory("contatosAPI", function($http) {
    let _getContatos = function () {
        return $http.get("http://localhost:3412/contatos");
    }

    let _saveContatos = function (contato) {
        return $http.post("http://localhost:3412/contatos", contato);
    }

    return {
        getContatos: _getContatos,
        saveContatos: _saveContatos
    };
});