import __QuestionSchema from '../Schema/question.schema';
import { model } from 'mongoose';
import { 
  QuestionModel, 
  QuestionSchema, 
  createQuestionParam, 
  editQuestionParam,
  Answer
} from '../../types/types';


__QuestionSchema.statics.createQuestion = async function (param: createQuestionParam) {
	return await this.create(param);
}

__QuestionSchema.statics.editQuestion = async function (id: string, params: editQuestionParam) {
  const question = await this.findById(id);
  if(!question){
    return false
  }
  await question.updateOne(params);
  const updatedQuestion = await this.findById(id);
  return updatedQuestion;
}

__QuestionSchema.statics.deleteQuestion = async function (id: string) {
  const question = await this.findById(id);
  if(!question){
    return false
  }
  await question.deleteOne();
  return true
}

__QuestionSchema.statics.answerQuestion = async function (id: string, answer: Answer) {
  const question = await this.findById(id)
  if(!question) {
    return false;
  }
  let previousAnswers = question.answer
  await question.updateOne({ answer: [...previousAnswers, answer ] })
  return await this.findById(id);
} 

__QuestionSchema.statics.getQuestion = async function (id: string) {
  return await this.findById(id)
}

__QuestionSchema.statics.getQuestions = async function (id: string) {
  return await this.find()
}

const __QuestionModel = model<QuestionSchema, QuestionModel>('question', __QuestionSchema);

export default __QuestionModel