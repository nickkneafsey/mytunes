// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on("add", this.enqueue, this);
    this.on("ended", this.playNext, this);

  },

  playFirst: function() {
    console.log("this", this.length, this)
    if (this.length){
      this.at(0).play();
    }
  },

  enqueue: function() {
    if (this.length === 1){
      this.playFirst();
    }
  },

  dequeue: function() {
    this.shift();
  },

  playNext: function(){
    this.dequeue();
    if (this.length){
      this.playFirst();
    }

  }

});