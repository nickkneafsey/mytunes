var PlaylistView = Backbone.View.extend({
  tagName: "table",
  className: "table table-hover",

  initialize: function () {
    this.render();

    if(this.collection!==undefined){
      this.collection.on("add", this.render, this);
    }
  },
  render: function  () {
    this.$el.children().detach();
    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song) {
        return new PlaylistItemView({model: song}).render();
      })
    );
  }
})