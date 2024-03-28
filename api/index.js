import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.log(error)
})

const app = express();

app.listen(3000, () => {
    console.log('Server is Running on port 3000...')
})
