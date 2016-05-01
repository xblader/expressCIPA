angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	
	var _getContatos = function(){
		return $http.get(config.baseUrl + "/contatos");
	}

	var _saveContato = function(contato){
		return $http.post(config.baseUrl + "/contatos", contato);
	}
	var _apagaContatos = function(contatos){
		return $http({ url: config.baseUrl + "/contatos", 
                method: 'DELETE', 
                data: contatos, 
                headers: {"Content-Type": "application/json;charset=utf-8"}
        });
	}
	return {
		getContatos : _getContatos,
		saveContato: _saveContato,
		apagaContatos : _apagaContatos
	};
});