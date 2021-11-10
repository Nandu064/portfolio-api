const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required: true,
    },
    git_hub:{
        type: String,
        required: true,
    },
    demo_url:{
        type: String,
    },
    start_date:{
        type: String,
        required: true
    },
    end_date:{
        type: String,
        required: true
    },

})

module.exports = mongoose.model('projects', projectSchema)