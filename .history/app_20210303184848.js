const express = require('express');
 const app = express();
const mongoose= require('mongoose')

app.get('/', (req,res)=> {
    res.send('we are on home');
});




//db




 app.listen(3000);