import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import connectDb from './config/db.js';
import AuthRouter from './Routes/AuthRoutes.js';


const app = express();

app.use(
    cors({
       origin:['http://localhost:5173'],
       credentials: true
    })
);

app.use(express.json());
app.use("/api/auth",AuthRouter);

app.set('port', (process.env.PORT || 5500));

const start = async()=>{
    app.listen(5500, () =>{
     connectDb()
     console.log("Listening on port 5500");
    })
}
start();