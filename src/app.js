import express from 'express';
import passport from 'passport';
import config from './configs/passport.js';
import router from './routes/index.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.DB_LOCAL);
    } catch (error) {
        console.log("Could not connect with DB", error)
    }
}

config(passport);
app.use(passport.initialize());

app.use(bodyParser.json());
await connectMongoDb();

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
