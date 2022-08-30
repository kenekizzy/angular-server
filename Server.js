require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();

const port = 3001;

const route = require("./Routes/Routes");
/**
 * The function is supposed to connect to the database and if it does, it should log a message to the
 * console.
 */

mongoose.connect(`mongodb://localhost:27017/KeneApp`, (err) => {
    if(err) console.log(err.stack);
    else console.log(`Database connected`);
});

const start = () => {
    console.log(`Server is up and running`);
}




app.use(express.json());
app.use('/api', route);
app.listen(port, start);