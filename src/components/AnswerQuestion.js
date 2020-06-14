import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleAddQuestionAnswer } from '../actions/questions'

export class AnswerQuestion extends Component {
    state={
        selectedOption:'',
    }
    handleChange = (e) => {
        const selectedOption = e.target.value
        this.setState(() => ({
            selectedOption,
        }))
      }
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch,authedUser, question, id } =this.props

        dispatch(handleAddQuestionAnswer({
            authedUser,
            qid: id,
            answer : this.state.selectedOption,
        }))
    }
    render() {
        //console.log(this.props);
        const { question,users,authedUser } = this.props;
        const { avatar, id, name, optionOneText, optionTwoText } = question;
        const answers =!users[authedUser] ? null : 
                  (!users[authedUser].answers ? null : users[authedUser].answers);
        let answered = null;
        if (answers!== null){
            if(answers[id])
            answered=answers[id];
        }
        
        console.log("answered : ",answered);
        return (
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="col s8 offset-s2">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <img alt='avatar center img' className="imgcenter" src={avatar}/>
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
    return{
        users,
        authedUser,
        id,
        question: !questions[id]
        ? []
        : formatQuestion(quesiton, users[quesiton.author],authedUser),
    }
}

export default connect(mapStateToProps)(AnswerQuestion)
