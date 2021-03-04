const express = require('express');
 const app = express();


app.get('/', (req,res)=> {
    res.send('we are on home');
});




//db




 app.listen(3000);