'use strict';

/**
 * @ngdoc function
 * @name appraiseApp.controller:AnalysisCtrl
 * @description
 * # AnalysisCtrl
 * Controller of the appraiseApp
 */
angular.module('appraiseApp')
  .controller('AnalysisCtrl', function ($scope, reviews) {
    $scope.reviews = reviews.get({app: 'dhl'})
  });
