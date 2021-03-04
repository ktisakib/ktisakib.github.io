const express = require('express');
 const app = express();
const mongoose= require('mongoose');

app.get('/', (req,res)=> {
    res.send('we are on home');
});
//
    mongoose.connect('mongodb+srv://ktisakib:<5097>@ktisakib.qygrh.mongodb.net/test',
    { useNewUrlParser: true },
     () => console.log('connected to db')
);



//db




 app.listen(3000);