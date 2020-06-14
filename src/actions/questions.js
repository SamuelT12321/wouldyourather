import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

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
		.then((question)=> dispatch(addQuestionAnswer(info)))
		.then(()=>dispatch(hideLoading()))
	}
}

export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

