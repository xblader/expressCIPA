angular.module("listaTelefonica").factory("httpRequestInterceptor", function ($q, $location) {
	
	 return {
        'responseError': function(rejection) {
            
            if(rejection.status === 404){
                $location.path('/Error');                    
            }
            return $q.reject(rejection);
         }
     };
});