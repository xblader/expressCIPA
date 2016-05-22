	angular.module("listaTelefonica").config(function($httpProvider){
		$httpProvider.interceptors.push("httpRequestInterceptor");
		$httpProvider.interceptors.push("timestampInterceptor");
	});