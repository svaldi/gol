var assert = require('chai').assert;
var Gol = require('../lib/game/gol');

describe('Gol', function () {
  it('can be imported', function () {
    assert.isDefined(Gol, 'great, Gol has been defined.');
  });

  it('can start', function () {
    assert.isNotNull(Gol.start, 'great, Gol game exists.');
  });

  it('can start', function () {
    assert.isFunction(Gol.start, 'great, we can start now.');
  });
});
