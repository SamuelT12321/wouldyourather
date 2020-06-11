import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

function addQuestionAnswer ({authedUser, qid, answer}) {
	return {
		type: ADD_QUESTION_ANSWER,
		authedUser,
		qid,
		answer
	}
}

export function handleAddQuestionAnswer (info){
	return (dispatch, getState)=>{
		const { authedUser } = getState()
		const { questionId, answer } = info
		dispatch(showLoading())

		return saveQuestionAnswer({
			authedUser,
			qid: questionId,
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

