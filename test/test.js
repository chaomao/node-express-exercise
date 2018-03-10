var feature = require('../lib/feature.js');
var expect = require('chai').expect;

describe('Feature', function() {
  describe('getFeature', function() {
    it('return add value string', function() {
      expect(feature.getFeature()).to.equal('value added');
    });
  });
});
