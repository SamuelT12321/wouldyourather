import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion,truncateString, formatDate } from '../utils/helpers'
import { withRouter } from 'react-router-dom'

export class QuestionCard extends Component {
    handleViewPoll = (e, id) => {
        e.preventDefault()
        //todo: redirect to answer question
        this.props.history.push(`/question/${id}`)

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
                    onClick={(e) => this.handleViewPoll(e, id)} 
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

export default withRouter(connect(mapStateToProps)(QuestionCard))
