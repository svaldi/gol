var assert = require('chai').assert;
var Logic = require('../../../lib/game/rules/logic');
var Space = require('../../../lib/game/space/space');
var Sleep = require('sleep');

describe('Space', function () {
  it('can be imported', function () {
    assert.isDefined(Space, 'great, Space can be imported.');
  });
});

describe('Sleep', function () {
  it('can be imported', function () {
    assert.isDefined(Sleep, 'great, Sleep is defined.');
  });

  it('can be use it', function () {
    assert.isObject(Sleep, 'great, we can Sleep console.');
  });
});

describe('#Logic functionality', function () {
  it('Data is ready', function () {
    assert.isObject(Logic.data(), 'great, Logic Data exists.');
  });

  it('can set Seed on space.', function () {
    assert.isFunction(Logic.seed, 'great, we can define a Seed for space.');
  });

  it('can we evolve', function () {
    assert.isFunction(Logic.evolve, 'great, we can evolve a seed.');
  });
});
