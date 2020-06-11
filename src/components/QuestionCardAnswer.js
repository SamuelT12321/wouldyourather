import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleAddQuestionAnswer } from '../actions/questions'

export class QuestionCardAnswer extends Component {
    state={
        answer:'',//optionOne or optionTwo
        userid:'',
        questionid:'',
        selectedOption:'',
    }
    handleChange = (e) => {

        const selectedOption = e.target.value
        this.setState(() => ({
            selectedOption
        }))
      }
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, question } =this.props
        const { id } = question
        const answer = this.state.selectedOption
        alert("answer :" + answer +",  id :"+ id)
        //qid, answer
        dispatch(handleAddQuestionAnswer({
            qid:id,
            answer 
        }))
        
        //answer can be optionOne or optionTwo
        //update users[authedUser].answers = ...object.add object.property { questionid : answer} 
        //update question[id].answer.votes.concat(authedUser)
    }
    render() {
        console.log(this.props);
        const { question } = this.props;
        const { avatar, id, name, optionOneText, optionTwoText } = question

        return (
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="col s8 offset-s2">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <img className="imgcenter" src={avatar}/>
                        <span className="card-title">{name} ask would you rather</span>
                        <ul className="collection">
                            <li className="collection-item">
                                <label>
                                    <input type="radio" 
                                           name="group1" 
                                           value="optionOne"
                                           checked={this.state.selectedOption === "optionOne"}
                                           onChange={this.handleChange}
                                           />
                                    <span>{optionOneText}</span>
                                </label>
                            </li>
                            <li className="collection-item">
                                <label>
                                    <input type="radio" 
                                           name="group1" 
                                           value="optionTwo"
                                           checked={this.state.selectedOption === "optionTwo"}
                                           onChange={this.handleChange}
                                           />
                                    <span>{optionTwoText}</span>
                                </label>
                            </li>
                        </ul>
                        </div>
                        <div className="card-action center-align">
                            <button className={`btn waves-effect waves-light ${this.state.selectedOption===''? "disabled" : ''}`}
                                    type="submit">
                                    Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

function mapStateToProps({authedUser, users, questions},{id}) {
    const quesiton = questions[id]
    console.log(typeof quesiton) 
    
    console.log("authedUser : "+authedUser);
    console.log("quesiton : "+ JSON.stringify(quesiton));
    console.log("id : "+id)
    return{
        authedUser,
        question: !questions[id]
        ? []
        : formatQuestion(quesiton, users[quesiton.author],authedUser),
    }
}

export default connect(mapStateToProps)(QuestionCardAnswer)
