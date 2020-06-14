import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion,truncateString, formatDate } from '../utils/helpers'

export class QuestionCard extends Component {
    toAnswer = (e, id) => {
        e.preventDefault()
        //todo: redirect to answer question
        alert('toAnswer : ' + id);
    }
    toAnswered=(e,id) =>{
        e.preventDefault()
        //todo: redirect to answer question
        alert('toAnswered with id : '+ id);
    }
    render() {
        const { question } = this.props;
        const { avatar, id, isAnswer, name, optionOneText, optionTwoText, timestamp } = question
        return (
            <div>
                <img src={avatar} 
                     alt="" 
                     className="circle" />
                <span className="title">{name} ask</span>
                <p>{truncateString(optionOneText+ optionTwoText,0,15)}</p>
                <span className="truncate">{formatDate(timestamp)}</span>
                <button
                    onClick={(e) => isAnswer ? this.toAnswered(e,id): this.toAnswer(e, id)} 
                    className="waves-effect waves-teal btn-flat secondary-content" 
                    type="button" 
                    name="action">
                        View Poll
                </button>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions},{id}) {
    const quesiton = questions[id]
    return{
        authedUser,
        question: formatQuestion(quesiton, users[quesiton.author],authedUser)
    }
}

export default connect(mapStateToProps)(QuestionCard)
