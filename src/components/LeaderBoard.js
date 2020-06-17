import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardScoreCard from './LeaderBoardScoreCard'

export class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        return (
            <div class="row">
	         <div class="col s6 offset-s3">
		        <ul class="collection">
                  { Object.keys(users).map((id)=>(
                      <li class="collection-item avatar" key={id}>
                          <LeaderBoardScoreCard id={id} />
                      </li>
                  ))}
                </ul>
             </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {  

    return{
        authedUser,
        users,
    }
}
export default connect(mapStateToProps)(LeaderBoard) 
