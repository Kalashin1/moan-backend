import { Request, Response } from 'express';
import Questions from '../data/models/question.model'
import { createQuestionParam, editQuestionParam, Answer } from '../types/types'

export const getQuestions = async (req: Request, res: Response) => {
	const questions = await Questions.getQuestions();
	res.json({ questions });
}

export const getQuestion = async (req: Request, res: Response) => {
	const { id } = req.params;
	const question = await Questions.getQuestion(id);
	res.json(question);
}

export const deleteQuestion = async (req: Request, res: Response) => {
	const { id } = req.params;
	const status = await Questions.deleteQuestion(id);
	status ? res.json({ message: "deleted successfully"}) : res.json({ message: "no question with that id"});
}

export const createQuestion = async (req: Request, res: Response) => {
	console.log(req.body)
	let obj = req.body
	const question = await Questions.createQuestion(obj)
	res.json(question)
}

export const editQuestion = async (req:Request, res: Response) => {
	const { id } = req.params;
	const editQuesParam:editQuestionParam = req.body;
	const question = await Questions.editQuestion(id, editQuesParam); 
	if (!question) {
		res.statusCode = 404
		res.json({ message: "no question with that id"})
	}
	res.json({ question})
}

export const answerQuestion = async (req: Request, res: Response) => {
	const { id } = req.params;
	const answer: Answer = req.body;
	const question = await Questions.answerQuestion(id, answer);
	if (!question) {
		res.statusCode = 404;
		res.json({ message: "no question with that id"})
	} 
	res.json({ question })
}