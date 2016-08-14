/*
 * Load GOL Dependencies.
 */
var space = require('./space/space');

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

    space.print();
  }
};
