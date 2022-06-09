import { Document, Model, ObjectId } from 'mongoose';

export type Answer = {
	username: string 
	answer: string 
}

export type createQuestionParam = {
  title: string,
  body: string,
  username: string
}

export type editQuestionParam = {
  title: string,
  body: string,
}

export interface QuestionSchema extends Document {
	title: string;
	_id?: ObjectId;
	body: string;
	username: string;
	answer: Array<Answer>;
}

export interface QuestionModel extends Model<QuestionSchema> {
  createQuestion(param: createQuestionParam) => Promise<QuestionSchema>;
  editQuestion(id: string, param: editQuestionParam) => Promise<QuestionSchema | boolean>;
  deleteQuestion(id: string) => Promise<boolean>;
  answerQuestion(id: string, answer: Answer) => Promise<QuestionSchema | boolean>;
  getQuestion(id: string) => Promise<QuestionSchema>;
  getQuestions() => Promise<QuestionSchema>;
}