import express from 'express'
import { GetAllIdeas, postAIdea ,upvoteIdea} from '../controllers/ideacontroller.js';

const ideaRouter = express.Router();

ideaRouter.get('/ideas',GetAllIdeas);
ideaRouter.post('/add-idea', postAIdea);
ideaRouter.patch('/upvote/:id',upvoteIdea);

export default ideaRouter;