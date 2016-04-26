angular.module("listaTelefonica").filter("name",function(){
	return function(input){
		var listaDeNomes = input.split(" ");
		var nova = listaDeNomes.map(function(nome){
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});

		return nova.join(" ");
	}
});