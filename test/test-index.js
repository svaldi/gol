var assert = require('chai').assert;
var Gol = require('../lib/game/gol');

describe('Gol', function () {
  it('can be imported', function () {
    assert.isDefined(Gol, 'great, Gol has been defined.');
  });

  it('can be use it', function () {
    assert.isObject(Gol, 'great, Gol can be use it.');
  });

  it('can be use it', function () {
    assert.isNotNull(Gol, 'great, Gol can be use it. (double assurance)');
  });

  it('can start', function () {
    assert.isNotNull(Gol.start, 'great, Gol game exists.');
  });

  it('can start', function () {
    assert.isFunction(Gol.start, 'great, we can start now.');
  });
});
