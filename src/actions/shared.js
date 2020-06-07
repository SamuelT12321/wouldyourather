import { getInitialData } from '../utils/api'
import { receiveUsers } from '../action/users'
import { receiveQuestions } from '../actions/questions'
//use redux thunk pathern 
//to make synchronize request
export function handleInitialData (){
	return (dispatch) => {
		return	getInitialData()
		.then(( users, questions)=>{
			dispatch(receiveUsers(users))
			dispatch(receiveQuestion(questions))
		})
	}
}