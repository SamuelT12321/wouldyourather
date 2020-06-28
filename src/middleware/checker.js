import { ANSWER_QUESTION } from '../actions/questions'

const checker = (store) => (next) => (action) => {
    if(
       action.type===ANSWER_QUESTION && !action.answer
    ){
       return alert("Please select at least one answer")  
    }
   
    return next(action)
   }
   
   export default checker