import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardScoreCard from './LeaderBoardScoreCard'

export class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        console.log("users : ",users)
        return (
            <div className="row">
	         <div className="col s6 offset-s3">
		        <ul className="collection">
                  { users.map((user, index )=>(
                      <li className="collection-item avatar" key={user.id}>
                          <LeaderBoardScoreCard id={user.id} />
                      </li>
                  ))}
                </ul>
             </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {  
    const userScore = user =>
         Object.keys(user.answers).length + user.questions.length

    return{
        authedUser,
        users: Object.values(users).sort((a,b) => userScore(b) - userScore(a)),
    }
}
export default connect(mapStateToProps)(LeaderBoard) 
