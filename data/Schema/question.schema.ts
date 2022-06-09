import { Schema } from 'mongoose';
import { QuestionSchema } from '../../types/types';

const schema = new Schema<QuestionSchema>({
	title: {
		type: String,
    required: [true, "please provide the title of your question"]
  },
	body: {
    type: String,
    required: [true, "please provide the content of your question"]
  },
	username: {
    type: String,
    required: [true, "please provide your username"]
  },
	answer: {
    type: [Object]
  }
}, {
  timestamps: true
})

export default schema