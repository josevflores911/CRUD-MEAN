const express = require('express');
const conectDB = require('./config/db')
const cors = require("cors");

const app = express();

conectDB();

app.use(cors());

app.use(express.json());

app.use('/api/products', require('./routes/product'));
/*
app.get('/',(req,res) =>{
    res.send('Holix');
})
*/

app.listen(4000, ()=>{
    console.log(" is running")
})

console.log("Hola mundo")