// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
   tagName: "table",
   className: "table table-hover",

  initialize: function() {
    this.render();
    
    if(this.collection!==undefined){

    this.collection.on("add", this.render, this);
    this.collection.on("remove", this.render, this);
    }
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    if (this.collection !== undefined){
      this.$el.html('<th>Queue</th>').append(
        this.collection.map(function(song) {
          return new SongQueueEntryView({model: song}).render();
        })
      );
    }
    
  }

});
