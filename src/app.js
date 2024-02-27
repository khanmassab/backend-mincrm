import express from 'express';
import router from './routes/index.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

// app.get('/', async (req, res) => {
//     res.send('Hello World with ES6 in Express!');
// });
const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.DB_LOCAL);
    } catch (error) {
        console.log("Could not connect with DB", error)
    }
}

await connectMongoDb();

app.use(bodyParser.json())
app.use('/api', router)


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});