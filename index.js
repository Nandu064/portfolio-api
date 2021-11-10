const express = require('express')
const mongoose = require('mongoose')
const dbUrl = 'mongodb+srv://root:<root@123>@portfolio.zkse2.mongodb.net/portfolioDB?retryWrites=true&w=majority'
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 9000;

const educationRouter = require('./routes/education')
const contactRouter = require('./routes/contact')
const projectRouter = require('./routes/projects')
const cors = require('cors')

app.use(cors())

app.use(express.json())

mongoose.connect(dbUrl,{useNewUrlParser:true})
const con = mongoose.connection


con.on('open',()=>{
    console.log('Connected...')
})
// Education
app.use('/education',educationRouter)
// Contact
app.use('/contact',contactRouter)
// Projects
app.use('/projects',projectRouter)


app.listen(PORT,()=>console.log(`Server Started on 9000...`))