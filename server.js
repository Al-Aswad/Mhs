import express from 'express';
import dotenv from 'dotenv';
import db from './config/database.js';
import Users from './models/Users.js';
import router from './routes/index.js';


dotenv.config();
const app = express();


try {
    await db.authenticate()
    await Users.sync();
    console.log("Connection has been established successfully.");
} catch (err) {
    console.log(err);
}

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("Server started on port 3000"));