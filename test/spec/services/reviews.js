'use strict';

describe('Service: reviews', function () {

  // load the service's module
  beforeEach(module('appraiseApp'));

  // instantiate service
  var reviews;
  beforeEach(inject(function (_reviews_) {
    reviews = _reviews_;
  }));

  it('should do something', function () {
    expect(!!reviews).toBe(true);
  });

});
