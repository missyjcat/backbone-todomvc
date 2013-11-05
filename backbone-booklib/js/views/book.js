var app = app || {};

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	
	// nameOfTemplate: _.template( $(id of template within script snippet with type=text/template).html())
	// And then later, you can call this:
	// this.$el.html( nameOfTemplate( this.model.toJSON()); 
	// this.$el.html() is getting the JQuery object (the bookContainer DIV is tagName + className we just defined up there) and calling .html() to inject HTML into it
	// nameOfTemplate accepts one parameter -- the model, and the template we have in the index (the script tag with ID bookTempalte).html accepts the model's attribtues, title and completed
	template: _.template( $('#bookTemplate').html()),

	render: function() {
		// this.el is what we defined in tagName: . Use this.$el to get access to jQuery html() function. 
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});