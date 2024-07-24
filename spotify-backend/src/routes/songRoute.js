// Package Connection
import express from 'express'
// Middleware Connection
import upload from '../middleware/multer.js'
// Controller Connection
import { addSong, listSong } from "../controllers/songController.js";

const songRouter = express.Router();

songRouter.post('/add', upload.fields([{ name: 'image', maxCount: 1}, { name: 'audio', maxCount: 1}]), addSong);
songRouter.get('/list', listSong);

export default songRouter;