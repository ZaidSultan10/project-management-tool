const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

// app.use('/todo',todo)

const mongoClient = `mongodb+srv://zaidsproject3:Qwer1234@cluster0.scpi2zf.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoClient,{useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    app.listen(5000, () =>{
        console.log('SERVER RUNNING ON PORT --> :',5000)
    })
}).catch(err => {
    console.log('err -->',err)
})