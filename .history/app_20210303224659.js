const express = require('express');
 const app = express();
const mongoose= require('mongoose');
require('dotenv/config');



app.get('/', (req,res)=> {
    res.send('we are on home');
});
//db
    mongoose.connect(process.env.DB_CONNECTION,
        { useUnifiedTopology: true },
     () => console.log('connected to db')
);
MongoClient.connect(
    
)


//db




 app.listen(3000);