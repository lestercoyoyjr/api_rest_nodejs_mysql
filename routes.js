const express = require('express')
const routes = express.Router()

routes.get('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)
            return res.send(err)
            
        conn.query('SELECT * FROM books', (err,rows)=>{
            if(err)
                return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)
            return res.send(err)
            
        conn.query('INSERT INTO books SET ?', [req.body], (err,rows)=>{
            if(err)
                return res.send(err)

            res.json('Book successfully inserted!')
        })
    })
})

module.exports = routes