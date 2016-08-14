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
      dead: null,
      survival: null,
      born: null
    }
  },

  seed: function(seed){
    space.setSeed(seed);
  },

  evolve: function(generations) {
    for(var x = 1; x <= generations; x++){
      this.data().dead = this.methods.deadRule(space.getSpace());
      this.data().survival = this.methods.survivalRule(space.getSpace());
      this.data().born = this.methods.bornRule(space.getSpace());

      //var merge = this.methods.merge();
      //this.seed(merge);

      space.print();
    }
  },

  methods: {
    /**
     * Dead Rule.
     */
    deadRule: function(seed){
      var partial = null;

      return partial;
    },

    /**
     * Survival Rule.
     */
    survivalRule: function(seed){
      var partial = null;

      return partial;
    },

    /**
     * Born Rule.
     */
    bornRule: function(seed){
      var partial = null;

      return partial;
    },

    /**
     * Merge seed the partials.
     */
    merge: function(){
      var space = null;

      return space;
    }

  }
};
