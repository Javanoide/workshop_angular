 'use strict';

 /* App Module */
var app = angular.module('workshopAngular', [
  'ngMessages',
  'ngMaterial',
  'ngRoute',
  'ngAnimate'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('blue');
    $mdThemingProvider.setDefaultTheme('altTheme');
});

app.controller('usersCtrl', ['$scope', function($scope, $mdSidenav){
  //montrer $scope avec variable
  $scope.hello = "Hello !";
  //montrer objet JSON
  $scope.ordinateur = {'marque' : 'Lenovo', 'modele' : 'T540p' };
  //ensuite on fait une liste d'utilisateur que l'on affichera avec la directive ng-repeat
  $scope.users = [
    {'firstname' : 'Florent', 'lastname' : 'Baudon', 'poste' : 'Consultant'},
    {'firstname' : 'Nicolas', 'lastname' : 'Bruel', 'poste' : 'Stagiaire'}
  ];
}]);
