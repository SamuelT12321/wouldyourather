import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatLeaderBoardUser } from '../utils/helpers'

export class LeaderBoardScoreCard extends Component {

    render() {
        const { user } = this.props
        const { name, avatarURL, answers, questions } = user
        return (
            <div>
              <img src={avatarURL} alt="" className="circle" />
		      <span className="title">{name}</span>
		      <ul className="collection">
		      		<li className="collection-item">
		      			Answered questions 
		      			<div className="right">{Object.keys(answers).length}</div>
		      		</li>
		      		<li className="collection-item">
		      			Created questions
                        <div className="right">{questions.length}</div>
		      		</li>
		      		<li className="collection-item teal lighten-4">
		      			Score
		      			<div className="right ">{Object.keys(answers).length + questions.length}</div>
		      		</li>
		      	</ul> 
            </div>
        )
    }
}
function mapStateToProps({users},{id}) {  
    const user = users[id]
    return{
        user
    }
}
export default connect(mapStateToProps)(LeaderBoardScoreCard)
