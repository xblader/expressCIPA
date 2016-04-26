angular.module("listaTelefonica").controller("NovoContatoCtrl", function($scope, $location, operadoras,  operadorasAPI,contatosAPI, serialGenerator){
		$scope.app = "Lista Telefônica";		
		$scope.operadoras = operadoras.data;
		$scope.AdicionarContato = function(contato){
			contato.serial = serialGenerator.generate();
			contato.data = new Date();
			contatosAPI.saveContato(contato).success(function(data){				
				delete $scope.contato;
				$scope.contatoForm.$setPristine();	
				$location.path("/contatos");			
			});			
			
		};	
		
	});