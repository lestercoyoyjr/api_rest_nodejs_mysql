const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const app = express()
app.set('port', process.env.PORT || 9000)

// middleware --------------------------------------------------

// routes ------------------------------------------------------
app.get('/', (req,res)=>{
    res.send('Welcome to my API')
})

// Server running -----------------------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port ', app.get('port'))
})