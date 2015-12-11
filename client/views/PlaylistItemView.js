var PlaylistItemView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template('<td><%= artist %></td><td><%= time %></td><td><%= title %></td>'),
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});