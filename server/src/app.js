console.log('life is good')
const express = require('express')// connection with the server http
const bodyParser = require('body-parser')// to process json language easily 
const cors = require('cors') // for a server to be host in a different domain name
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.listen(process.env.PORT || 8081)

app.get("/status", (req,res)=>{
    res.send({
        Message: 'hello worl'
    })
})

app.post("/register", (req,res)=>{
    res.send({
        Message: `Hello ${req.body.email}!Your user was registered! You are ready to go...`
    })
})

