/*
 * Load GOL Dependencies.
 */
var space = require('../space/space');

module.exports = {
  seed: function(seed){
    space.setSeed(seed);
  },

  evolve: function(generations) {
    for(var x = 1; x <= generations; x++){
      space.print();
    }
  }
};
