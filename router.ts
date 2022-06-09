import { Router, Request, Response } from 'express';
import { 
	getQuestions, 
	getQuestion, 
	createQuestion, 
	editQuestion, 
	deleteQuestion, 
	answerQuestion 
} from './controller/question'

const router = Router();

router.get('/', getQuestions)

router.get('/:id', getQuestion)

router.post('/', createQuestion)

router.delete('/:id', deleteQuestion)

router.patch('/:id', editQuestion)

router.put('/:id', answerQuestion)

export default router;