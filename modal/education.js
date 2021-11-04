const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    institute_name:{
        type: String,
        required: true,
    },
    institute_location:{
        type: String,
        required: true,
    },
    percentage:{
        type: Number,
        required: true,
    },
    start_year:{
        type: Number,
        required: true
    },
    end_year:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('education', educationSchema)