angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, contatos, serialGenerator){
		$scope.app = "Lista Telefônica";
		$scope.contatos = contatos.data;		

		var SerialGenerate = function(contatosList) {
			contatosList.forEach(function(item){
				item.serial = serialGenerator.generate();
			});					
		};

		$scope.isSelecionado = function(contatos){
			return contatos.some(function(contato){
				return contato.selecionado;
			});
		};
		
		$scope.ApagarContatos = function(contatos){
			$scope.contatos = contatos.filter(function(contato){
					if(!contato.selecionado) return contato;
			});
		};

		$scope.ordernarPor = function(campo){
			$scope.criterioDeOrdenacao = campo;
			$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
		};

		SerialGenerate($scope.contatos);		
	});