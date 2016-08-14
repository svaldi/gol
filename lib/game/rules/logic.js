/*
 * Load GOL Dependencies.
 */
var space = require('../space/space');

module.exports = {
  /**
   * Initial State of the component's data.
   */
  data: function () {
    return {
      dead: [],
      survival: [],
      born: []
    }
  },

  seed: function(seed){
    space.setSeed(seed);
    space.print(space.getSpace());
  },

  evolve: function(generations) {
    for(var x = 1; x <= generations; x++){
      this.data.dead = this.methods.deadRule(space.getSpace());
      this.data.survival = this.methods.survivalRule(space.getSpace());
      this.data.born = this.methods.bornRule(space.getSpace());

      var merge = this.methods.merge(this.data.survival, this.data.born);
      space.setSeed(merge);
      space.print(merge);
    }
  },

  methods: {
    /**
     * Dead Rule.
     */
    deadRule: function(seed){
      var partial = JSON.parse(JSON.stringify(seed));

      for(var i = 0; i < seed.length; i++){
        for(var j = 0; j < seed.length; j++) {
          if(seed[i][j] == 1) {
            var neighbours = this.neighbours(i, j, seed);

            if(neighbours < 2 || neighbours > 3) {
              partial[i][j] = 1;
            }else{
              partial[i][j] = 0;
            }
          }
        }
      }
      return partial;
    },


    /**
     * Survival Rule.
     */
    survivalRule: function(seed){
      var partial = JSON.parse(JSON.stringify(seed));

      for(var i = 0; i < seed.length; i++){
        for(var j = 0; j < seed.length; j++) {
          if(seed[i][j] == 1) {
            var neighbours = this.neighbours(i, j, seed);

            if(neighbours == 2 || neighbours == 3) {
              partial[i][j] = 1;
            }else{
              partial[i][j] = 0;
            }
          }
        }
      }
      return partial;
    },

    /**
     * Born Rule.
     */
    bornRule: function(seed){
      var partial = JSON.parse(JSON.stringify(seed));

      for(var i = 0; i < seed.length; i++){
        for(var j = 0; j < seed.length; j++) {
          if(seed[i][j] == 0) {
            var neighbours = this.neighbours(i, j, seed);
            if(neighbours == 3) {
              partial[i][j] = 1;
            }
          }else{
            partial[i][j] = 0;
          }
        }
      }
      return partial;
    },


    /**
     * Merge seed the partials.
     */
    merge: function(survival, born){
      var merge = JSON.parse(JSON.stringify(survival));

      for(var i = 0; i < born.length; i++){
        for(var j = 0; j < born.length; j++){
          if(born[i][j] == 1) {
            merge[i][j] = born[i][j];
          }
        }
      }
      return merge;
    },


    /**
     * Get number of alive neighbours.
     */
    neighbours: function (posX, posY, array) {
      var neighbours = 0;

      for(var row = posX - 1; row <= posX + 1 ; row++){
        for(var col = posY - 1; col <= posY + 1 ; col++){
          if(!(posX == row && posY == col) && row >= 0 && col >= 0 && row < array.length && col < array.length){
            if(array[row][col] == 1){
              neighbours++;
            }
          }
        }
      }
      return neighbours;
    }
  }
};
