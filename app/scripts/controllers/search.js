'use strict';

/**
 * @ngdoc function
 * @name appraiseApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the appraiseApp
 */
angular.module('appraiseApp')
  .controller('SearchCtrl', function ($scope) {

    $scope.results = [
      'DHL Paket',
      'DHL ACTIVETRACING',
      'Deliveries Package',
      'DHL Express Mobile',
      'ParcelTrack UPS DPD FedEx DHL',
      'Post mobil',
      'DHL Global Forwarding Track'
    ];

    $scope.go = function () {
      $scope.go = function (url) {
        $location.path(url);
      }
    }
  });
