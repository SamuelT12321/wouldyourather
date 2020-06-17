import React, { Component } from 'react'
import { connect } from 'react-redux'

export class LeaderBoardScoreCard extends Component {

    render() {
        return (
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaLdxf3ayHfsQc8FSsGdT7N4U-AaEvS0kSYfFZC-pj_VprT9u-&usqp=CAU" alt="" class="circle" />
		      <span class="title">Jane Doe</span>
		      <ul class="collection">
		      		<li class="collection-item">
		      			Answered questions 
		      			<div class="right">3</div>
		      		</li>
		      		<li class="collection-item">
		      			Created questions
		      			<div class="right">5</div>
		      		</li>
		      		<li class="collection-item teal lighten-4">
		      			Score
		      			<div class="right ">8</div>
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
export default LeaderBoardScoreCard
