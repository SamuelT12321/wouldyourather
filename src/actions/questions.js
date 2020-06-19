import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ASK_QUESTION = 'ASK_QUESTION'

function addQuestionAnswer ({authedUser, qid, answer}) {
	return {
		type: ANSWER_QUESTION,
		authedUser,
		qid,
		answer
	}
}

export function handleAddQuestionAnswer (info){
	return (dispatch, getState)=>{
		const { authedUser, qid, answer } = info
		dispatch(showLoading())
		
		return saveQuestionAnswer({
			authedUser,
			qid,
			answer
		})
		.then(()=> dispatch(addQuestionAnswer(info)))
		.then(()=>dispatch(hideLoading()))
	}
}

export function addQuestion (question)
{
	return {
		type: ASK_QUESTION,
		question
	}
}

export function handleAddQuestion (info){
	return (dispatch, getState)=>{
		const { optionOne, optionTwo  } = info
		const { authedUser } =getState()
		dispatch(showLoading())
		
		return saveQuestion({
			author: authedUser,
			optionOneText:optionOne,
			optionTwoText:optionTwo
		})
		.then((question)=> dispatch(addQuestion(question)))
		.then(()=>dispatch(hideLoading()))
	}
}

export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

