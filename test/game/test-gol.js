var assert = require('chai').assert;
var Logic = require('../../lib/game/rules/logic');
var Seed = require('../../lib/game/cell/seed/gleader');

var Clear = require('clear');

describe('Logic', function () {
  it('can be imported', function () {
    assert.isDefined(Logic, 'great, Logic game can be imported.');
  });
});

describe('Seed', function () {
  it('can be imported', function () {
    assert.isDefined(Seed, 'great, Seed can be imported.');
  });

  it('can we use it', function () {
    assert.isArray(Seed, 'great, Seed is ready.');
  });
});

describe('Clear', function () {
  it('can be imported', function () {
    assert.isDefined(Clear, 'great, Clear is defined.');
  });

  it('can be use it', function () {
    assert.isFunction(Clear, 'great, we can Clear console.');
  });
});
