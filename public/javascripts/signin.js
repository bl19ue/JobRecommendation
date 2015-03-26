'use strict';

angular.module('lala', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('tata', {
		url: '/tata',
		templateurl: '/tata.html',
		controller: 'SignInCtrl'
	})
	.state('tata2', {
		url: '/tata2',
		templateurl: '/tata2.html',
		controller: 'SignInCtrl2'
	})
	.state('tata3', {
		url: '/tata3',
		templateurl: '/tata3.html',
		controller: 'SignInCtrl3'
	});
	$urlRouterProvider.when('', 'tata');
}])
.controller('SignInCtrl', ['$scope', function($scope){
	console.log("heyyy");
	$scope.a = "uouo";
}])
.controller('SignInCtrl2', ['$scope', function($scope){
	console.log("heyyy3");
	$scope.a = "uouo2";
}])
.controller('SignInCtrl3', ['$scope', function($scope){
	$scope.a = "uouo3";
}])
;