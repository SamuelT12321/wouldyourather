import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

export class Questions extends Component {
    render() {
        const { question } = this.props;
        const { avatar, id, isAnswer, name, optionOneText, optionTwoText, timestamp } = question
        return (
            <div>
                <img src={avatar} 
                     alt="" 
                     className="circle" />
                <span className="title">{name} ask</span>
                <p className="truncate">
                    {optionOneText}<br></br>
                    {optionTwoText}
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">View Poll</i></a>
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

export default connect(mapStateToProps)(Questions)
