'use strict';

/**
 * @ngdoc function
 * @name appraiseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appraiseApp
 */
angular.module('appraiseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.searchTermDefault = 'Name or ID';
    $scope.searchTermHint = 'Search for apps on the PlayStore and AppStore'
    //$.material.init();
  });
