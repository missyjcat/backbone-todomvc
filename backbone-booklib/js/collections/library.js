var app = app || {};

app.Library = Backbone.Collection.extend({

	// Here were defining what this collection will hold
	model: app.Book;
});