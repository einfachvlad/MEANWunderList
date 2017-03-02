var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

var Todo = mongoose.model('Todo', {
    time: String,
    date: String,
    description: String,
    status: String,
    isEditable: Boolean,
    isCreated: Boolean
});

module.exports.Todo = Todo;
