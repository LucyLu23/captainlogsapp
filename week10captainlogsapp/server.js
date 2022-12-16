require("dotenv").config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
port =3006;

app.get('/',(req, res)=>{
    res.send('Welcome to CaptainLogsApp')
})

app.listen(port, ()=>{
    console.log(`${port}----listening`)
} )