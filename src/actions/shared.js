import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/setAuthedUser'

const AUTHED_ID = 'sarahedo'
//use redux thunk pathern 
//to make synchronize request
export function handleInitialData (){
	return (dispatch) => {
		return	getInitialData()
		.then(( users, questions)=>{
			dispatch(receiveUsers(users))
			dispatch(receiveQuestion(questions))
			dispatch(setAuthedUser(AUTHED_ID))
		})
	}
}