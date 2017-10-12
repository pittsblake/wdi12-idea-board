//Imports variables from .env file
require ('dotenv').config()
const express = require ('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise

//Create new app using EXpress
const app = express()

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection

connection.on('connected', () => {
    console.log("Successfully connected to MONGODB")
})

connection.on('error', (err) => {
    console.log('MongoDB ERROR: ', err)
})


//Inject middleware
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("App listening on port", PORT)
})