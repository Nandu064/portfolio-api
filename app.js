const express = require('express')
const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost/portfolioDB'
const app = express()

const educationRouter = require('./routes/education')
const contactRouter = require('./routes/contact')

app.use(express.json())

mongoose.connect(dbUrl,{useNewUrlParser:true})
const con = mongoose.connection


con.on('open',()=>{
    console.log('Connected...')
})
// Edducation
app.use('/education',educationRouter)
app.use('/contact',contactRouter)


app.listen(9000,()=>console.log(`Server Started on 9000...`))