const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

const Todo = mongoose.model('Todo', {
    time: String,
    date: String,
    description: String,
    status: String,
    isEditable: Boolean,
    isCreated: Boolean,
    isBookmarked: Boolean
});

module.exports.Todo = Todo;
