/**
 * BACKBONE.JS TUTORIAL and LEARNINGS
 *
 * Using http://addyosmani.github.io/backbone-fundamentals/ as a guide and writing my own notes
 *
 */

/**
 * THE MODEL PART
 */

// Backbone special words: defaults

// Define a Todo model
var Todo = Backbone.Model.extend({
	// Default attributes and values
	defaults: {
		title: '',
		completed: false
	}
});

// Instantiate the Todo Model with a title, and completed attribute defaulting to false for not yet done
var myTodo = new Todo({
	title: 'Check attributes property of the logged models in the console'
});

/**
 * THE VIEW PART
 */

// Backbone special words: tagname, events, initialize, $el, render, this.model (is an argument of the View when it's instantiated), this.input

// Each Todo instance rendered on the page by a TodoView
var TodoView = Backbone.View.extend({

	tagname: 'li',

	// Cache the template function for a single item -- I guess this will output some html? come back to what this does.
	// OKAY so... todoTpl is now a template object
	// I think this is the way to define a template object that can later be called to be injected:
	// nameOfTemplate: _.template( $(id of template within script snippet with type=text/template).html())
	// And then later, you can call this:
	// this.$el.html( nameOfTemplate( this.model.toJSON()); 
	// this.$el.html() is getting the JQuery object (the todo DIV we put in the view in the beginning) and calling .html() to inject HTML into it
	// nameOfTemplate accepts one parameter -- the model, and the template we have in the index.html accepts the model's attribtues, title and completed
	todoTpl: _.template($('#item_template').html()),


	// BACKBONE CONTROLLER: This is really the Backbone controller-- events and what to do to respond to those events
	// Controller role performed by the template, not the view??
	// Mixed into both model and view
	// All event callbacks use "this" to refer to the current View object
	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	// Called when the view is first created
	initialize: function() {

		// Later we'll look at:
		// this.listenTo(someCollection, 'all', this.render);
		// but you can actually run this example right now by
		// calling todoView.render();

		// We started out the app with a div with id="todo" so I guess this defines $el
		this.$el = $('#todo');
	},


	// EACH time render is called, it will replace the content of the li with
	// the current Model data
	// 
	// LATER: bind render() to Model change events so it updates live
	render: function() {

		// $el here is a reference to the jQuery element 
		// associated with the view, todoTpl is a reference
		// to an Underscore template and toJSON() returns an 
		// object containing the model's attributes
		// Altogether, the statement is replacing the HTML of
		// a DOM element with the result of instantiating a 
		// template with the model's attributes.
		this.$el.html( this.todoTpl( this.model.toJSON() ));
		
		// Not sure what this does? Where did the .edit come from
		// Oh wait, this is the input box of the todo item
		// But what is this and .input and how is it being assigned a JQuery object?
		this.input = this.$('.edit');
	},

	edit: function() {
		// called when todo label is double clicked (see events properti)
	},

	close: function() {
		// called when blur happens in the edit box
	},

	updateOnEnter: function(e) {
		// called on each keypress when in todo edit mode,
		// but we'll assign e to enter later
	}

});

// Create view for a todo
// todoView is an instance of TodoView which accepts one object with model as the key
// and the newly created myTodo model we have up there on line 17
// So basically the below line puts that specific TODO into the view we just defined above
// And sticks that view into the DIV we have in index.html WITHIN the li (defined as tagname) 
var todoView = new TodoView({model: myTodo});

// Other Backbone methods:
//
// Model.set and Model.get (sets and gets values. can take objects too, set triggers change too.) 
// .attributes represents internal hash with state of Model, and setting "attributes" to a modified object
// 
// Better to use Model.set() with an additional {silent: true} argument instead of overwriting .attributes
