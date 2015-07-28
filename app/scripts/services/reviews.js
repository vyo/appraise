'use strict';

/**
 * @ngdoc service
 * @name appraiseApp.reviews
 * @description
 * # reviews
 * Service in the appraiseApp.
 */
angular.module('appraiseApp')
  .service('reviews', function ($resource) {
    return $resource('/rest/reviews/:app', {}, {
      //'query': {method: 'GET', isArray: true},
      'get': {method: 'GET', isArray: true}
    });
  });
