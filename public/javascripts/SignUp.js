angular.module('signUpModule', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('csignup', {
			url: '/csignup',
			templateUrl: '/csignup.html',
			controller: 'SignupCtrl'
		})

		.state('signupdone', {
			url: '/signupdone',
			templateurl: '/signupdone.html',
			controller: 'AfterSignupCtrl'
		});
		
		$urlRouterProvider.otherwise('csignup');
	}])
.factory('company', ['$http', function($http){
	var o = {
		company: []
	};

	o.create = function(company){
		return $http.post('/signupdone', company).success(function(data){
			o.company.push(data);
		});	
	};
	
	return o;
}])

.controller('SignupCtrl', ['$scope', 'company', '$state', function($scope, company, $state){
	$scope.company = company.company;
	$scope.aa = "Yo";
	/*if(someError) {return;}*/
	
	$scope.addCompany = function(){
		company.create({
			companyname: $scope.name,
			companydesc: $scope.desc,
			username: $scope.username,
			password: $scope.password
		});
		
		$state.transitionTo('signupdone');
	};
	
	
}])

.controller('AfterSignupCtrl', ['$scope', 'company', function($scope, company){
	console.log(company);
	$scope.var = "good";
	console.log($scope.var);
}]);