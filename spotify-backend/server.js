import express from 'express'
import cors from 'cors'
import 'dotenv/config'
// MongoDB Connection
import connectDB from './src/config/mongodb.js';
// Cloudinary Connection
import connectCloudinary from './src/config/cloudinary.js';
// Router Connection
import songRouter from './src/routes/songRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// Initializing Routes
app.use('/api/song', songRouter);


app.get('/', (req, res) => res.send('API Working!'));
app.listen(port, () => console.log(`Server started on ${port}`));