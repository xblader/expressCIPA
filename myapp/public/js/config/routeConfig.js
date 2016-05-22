angular.module("listaTelefonica").config(function($routeProvider){
	$routeProvider.when("/contatos",{
		templateUrl:"view/contatos.html",
		controller: "listaTelefonicaCtrl",
		resolve:{
			contatos: function(contatosAPI){
				return contatosAPI.getContatos();
			}
		}
	});

	$routeProvider.when("/novoContato",{
		templateUrl:"view/novoContato.html",
		controller: "NovoContatoCtrl",
		resolve:{
			operadoras: function(operadorasAPI){
				return operadorasAPI.getOperadoras();
			}
		}
	});

	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});

	$routeProvider.when("/Error",{
		templateUrl:"view/Error.html"
	});

	$routeProvider.otherwise({redirectTo: "/contatos"});
});