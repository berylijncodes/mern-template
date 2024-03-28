import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routes/userRoutes.js'

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

app.use('/api/user', userRouter);
