import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();
app.use(express.json());
//Remove '/books' for all bookRouted.js 
app.use('/books', booksRoute);

//CORS policy secuirity 
// app.use(cors());
//custom access
/*app.use(cors({
    orgin: 'http://localhost:5555',
    method:['GET', 'POST', 'PUT', 'DELETE'],
    allowedheaders: ['Content-Type'],
}))*/

//Status
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Woring book store")
});

mongoose
    .connect(mongoDBURL)
    .then(() =>{
        console.log('App is conected')
        app.listen(PORT, () =>{
            console.log(`Listening to ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error)
    });
