/*
 * Load GOL Dependencies.
 */
var logic = require('./rules/logic');
var seed = require('./cell/seed/gleader');

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

    logic.seed(seed);
    logic.evolve(100);
  }
};
