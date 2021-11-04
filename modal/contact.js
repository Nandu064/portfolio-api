const mongoose = require('mongoose')

const contactScheema = new mongoose.Schema({
    mobile: {
        type: Number,
        required: true
    },
    optional_mobile: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    git_hub:{
        type: String,
        required:true,
    },
    linkedIn:{
        type: String,
        required:true,
    },
})

module.exports = mongoose.model('contact',contactScheema)