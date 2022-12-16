require('dotenv').config();
const express = require('express');
const app =express();


const port=3006;

app.get('/',(req, res)=>{
    res.send('new');
})

app.get('/new')

app.listen(port, ()=>{
    console.log(`${port}----listening`)
})
