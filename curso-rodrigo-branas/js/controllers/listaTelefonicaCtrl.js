angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    let carregarContatos = function() {
        contatosAPI.getContatos().then(function(data){
            $scope.contatos = data.data;
        }).catch(function(data) {
            $scope.error = "Não foi possível carregar os dados!";
        });
    };

    let carregarOperadoras = function() {
        operadorasAPI.getOperadoras().then(function(data){
            $scope.operadoras = data.data;
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContatos(contato).then(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $scope.contatos.push(data);
            carregarContatos();
        });
    };
    $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            if(!contato.selecionado) return contato;
        });
    }
    $scope.isContatoSelecionado = function (contatos) {
       return contatos.some(function(contato) {
            return contato.selecionado;
        })
    }
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
    }

    carregarContatos();
    carregarOperadoras();

});