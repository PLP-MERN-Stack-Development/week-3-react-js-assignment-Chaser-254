import express from 'express';
import { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use('/api/tasks', taskRoutes);

connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => console.log('Server running...'));
}).catch(err => console.log(err));