const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = Schema({
    title: "string",
    description: "string",
    status: { type:Boolean,
            default: false
    }
});

module.exports = mongoose.model('tasks', TaskSchema);

