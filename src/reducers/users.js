import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION,ASK_QUESTION } from '../actions/questions'

export default function users (state ={}, action) {

	switch(action.type){
		case RECEIVE_USERS :
		 return{
		 	...state,
		 	...action.users
		 }
		 case ANSWER_QUESTION :
		 const { authedUser, qid, answer } = action
			return{
				...state,
				[authedUser]:{
					...state[authedUser],
					answers:{
						...state[authedUser].answers,
						[qid]:answer
					}
				}
			}
		case ASK_QUESTION : 
		const { question } = action
		const { author, id } = question
			return{
			   ...state,
			   [author]:{
					...state[author],
					questions:state[author].questions.concat(id)
			   }
			}
		default :
			return state	
	}
}