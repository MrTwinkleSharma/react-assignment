//3rd Party Modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');


//Local Modules
const todoRoutes = require('./routes/todoRoutes.js')

//Initializations
const app = express();
const PORT = process.env.PORT || '5000';

//Important Middlewares
//To serve build
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
//To know information of request response
if (app.get('env') === 'production') {
    app.use(morgan('combined'));
} else {
app.use(morgan('dev'));
}
//To use the json data at backend
app.use(express.json());

//To allow interaction from cross origin
app.use(cors());

//The main APIs route
app.use('/api', todoRoutes);

//Connection with Database and Server Listening
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mongodbcluster.mcnv5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
                { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server is Listening on Port " + PORT);
    })
})
.catch((err)=>{
    console.log("A error has been occured while connecting to database!", err);    
})
