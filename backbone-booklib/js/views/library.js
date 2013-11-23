var app = app || {};

app.LibraryView = Backbone.View.extend({

	// This is the element we're looking for to insert the list
	el: '#books',

	initialize: function( initialBooks ) {

		// Defining the collection that will populate this view. New
		// app.Library(initialBooks) is defining the function that 
		// will be called later in app.js (new app.Library(books);)
		// Defining books.collection
		// and books.render();
		this.collection = new app.Library( initialBooks );
		this.render();
	},

	// render library by rendering each book in its collection
	render: function() {

		// This is called only after this.collection is defined (in this case, as books.collection = new app.Library(books)).
		// 
		// So for each item in the collection, it calls renderBook(
		// item) ...
		this.collection.each(function(item) {
			this.renderBook(item);
		}, this );
	},

	//render a book by creating a BookView and appending the element it renders to the library's element
	//
	//...which takes the item and creates a new View of it 
	// with the "BookView" function being called within that 
	// renderBook function, with an argument for the model (?)
	// 
	// And it uses this.$el to access each individual book div and 
	// append the bookView to the end of that element. render() 
	// RETURNS the template which is then ... appended to el?
	renderBook: function(item) {
		var bookView = new app.BookView({
			model: item
		});
		this.$el.append(bookView.render().el);
	}
})