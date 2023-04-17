import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import morgan from 'morgan';

import connect from "./database/conn.js";
import router from './router/route.js';

const app = express();

dotenv.config();
dotenv.config({ path: 'config.env' })

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

// HTTP GET request
app.get('/', function (req, res) {
    res.status(201).json("Home GET Request");
});

// API routes
app.use('/api', router);

// Response headers
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
    );
    next();
});

// Database Connection
const PORT = process.env.PORT || 5000;

// Start server when we have valid MongoDB connection
connect()
    .then(() => {
        try {
            app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });
        } catch (err) {
            console.log(`Cannot connect to server`);
        }
    })
    .catch(err => console.error("Invalid database connection: " + err));

export default app;
