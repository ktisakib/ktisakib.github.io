const express = require('express');
 const app = express();
const mongoose= require('mongoose');
require(dotenv)



app.get('/', (req,res)=> {
    res.send('we are on home');
});
//db
    mongoose.connect('',
    { useNewUrlParser: true },
     () => console.log('connected to db')
);



//db




 app.listen(3000);