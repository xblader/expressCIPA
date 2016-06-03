angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($window, $scope, $location, contatosAPI, contatos, serialGenerator){
		$scope.app = "Lista Telefônica";
		$scope.contatos = contatos.data;	

		$scope.isSelecionado = function(contatos){
			return contatos.some(function(contato){
				return contato.selecionado;
			});
		};
		
		$scope.ApagarContatos = function(contatos){
			var contatosselecionados = contatos.filter(function(contato){
				if(contato.selecionado) return contato;
 			});

			contatosAPI.apagaContatos(contatosselecionados).then(function(data){
				$window.location.reload();
			});
		};

		$scope.ordernarPor = function(campo){
			$scope.criterioDeOrdenacao = campo;
			$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
		};			
	});