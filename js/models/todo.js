/**
 * TODO MODEL
 */

// Backbone special words: defaults

var app = app || {};

app.Todo = Backbone.Model.extend({
	
	// Setting the defaults for the model
	defaults: {
		title: '',
		completed: false
	},

	// Toggle the 'completed' state of this todo item
	toggle: function() {

		// For this todo item, save the completed attribute to the opposite
		// of the current completed state
		this.save({

			// Set completed to the opposite of the "get" of the current completed state
			completed: !this.get('completed')
		});
	}


});