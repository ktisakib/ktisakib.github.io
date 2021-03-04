const express = require('express');
 const app = express();


app.get('/', (req,res)=> {
    res.send('we are on home)
})


 app.listen(3000);