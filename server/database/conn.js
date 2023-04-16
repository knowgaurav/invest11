import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: 'config.env' });

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nj9dbeo.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
    try {
        const db = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
        return db;
    } catch (err) {
        console.log('Error connecting to MongoDB database: ' + err.message);
        throw err;
    }
}

export default connect;

