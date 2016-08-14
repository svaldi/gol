/*
 * Load GOL Dependencies.
 */
require('../core/dependencies');

/*
 * Clear Helper.
 */
var clear = require('clear');

module.exports = {

  /**
   * Start Conway's Game of Life function.
   */
  start: function () {
    clear();

    console.log('Conway\'s Game of Life');
  }
};
