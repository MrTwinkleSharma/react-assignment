const mongoose = require('mongoose')

const TaskModel = new mongoose.Schema({

    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    }
});

module.exports = mongoose.model("Todo", TaskModel);