const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const PORT = 8000;

const {connectMongoDb} = require('./connection')

const mongoose = require('mongoose')


const userRouter = require('./routes/user')

connectMongoDb("url")


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) =>{
    console.log("hello from middlware 1")
    next();
})


//routes
app.use('/user', userRouter);


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});