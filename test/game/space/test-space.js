var assert = require('chai').assert;
var Space = require('../../../lib/game/space/space');
var Seed = require('../../../lib/game/cell/seed/gleader');

describe('#Space functionality', function () {
  it('can be imported', function () {
    assert.isArray(Space.data().space, 'great, Space Board exists.');
  });

  it('can set Seed on space', function () {
    assert.isFunction(Space.setSeed, 'great, we can set a Seed on the space.');
  });

  it('can we get Space', function () {
    assert.isFunction(Space.getSpace, 'great, we can get a Seed on the space.');
  });

  it('can we get Space object', function () {
    Space.setSeed(Seed);
    assert.isArray(Space.getSpace(), 'great, we can get a Seed on the space.');
  });

  it('can we print Space on console', function () {
    assert.isFunction(Space.print, 'great, we can print the space on console.');
  });
});
