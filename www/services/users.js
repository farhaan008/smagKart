angular.module('starter.services')
.factory('usersService', function($http) {
  'use strict';

  var service = {   
	userDetails: function () {		
		 		 return $http.get("data/user/account.json");
    },
	userLogout: function () {
		 return $http.get("/data/user/logout.json");
    },
    userLogin : function(data){    	
    	var req = {
			method: "POST",
			url: "http://smagkart.com/index.php?route=api/opencart_api/login",
			headers: {
			"Content-Type": "application/x-www-form-urlencoded;"
			},			
			data: "email="+encodeURIComponent(data.email)+"&password="+encodeURIComponent(data.password)+"&token="+encodeURIComponent(data.token),
		}
		$http(req).then( function(res){
			console.log(res);
		}, function(err){ 
			console.log(err);
		});
    },
	getCountries: function () {
		 return $http.get("/data/user/countries.json");
    },
	
  };

  return service;
});
