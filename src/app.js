import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/index.js';
import config from './configs/passport.js';
import multer from './middlewares/upload.js';
import passport from 'passport';
dotenv.config();

const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));
const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.DB_LOCAL);
    } catch (error) {
        console.log("Could not connect with DB", error)
    }
}

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(multer); 
app.use('/uploads', express.static('uploads'));

config(passport);
app.use(passport.initialize());
await connectMongoDb();

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
