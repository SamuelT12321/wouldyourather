import React, { Component } from 'react'
import { connect } from 'react-redux'
import M, { objectSelectorString } from 'materialize-css/dist/js/materialize.min.js'
import { queries } from '@testing-library/react';
import Question from './Question'

export class Dashboard extends Component {
    componentDidMount(){
        var el = document.querySelectorAll('.tabs');
        var instance = M.Tabs.init(el, {}); 
    }

    render() {
        return (
            <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s4 offset-s2"><a className="active" href="#unanswered">Unanswered questions</a></li>
                <li className="tab col s4"><a href="#answered">Answered Questions</a></li>
              </ul>
            </div>
            <div id="unanswered" className="col s6 offset-s3">
              <ul className="collection">
                {this.props.unAnsQuestionsIds.map((id)=>(
                  <li className="collection-item avatar" key={id}>
                    <div>
                      <Question id={id}/>
                    </div>
                  </li>
                ))}
              </ul>	    	
    
            </div>
            <div id="answered" className="col s6 offset-s3">
              <ul className="collection">
                {this.props.ansQuestionsIds.map((id)=>(
                  <li className="collection-item avatar" key={id}>
                     <div>
                       <Question id={id}/>
                     </div>
                   </li>
                ))}
              </ul>
            </div>
          </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser }) {
  //#region first attempt
    // let answered = [];
    // let unanswered = [];

    // for (const key in questions) { 
    //   //optional check for properties from prototype chain
    //   if (questions.hasOwnProperty(key)) {
    //       let existsInOne = Object.values(questions[key].optionOne.votes).includes(authedUser);
                            
    //       let existsInTwo = Object.values(questions[key].optionTwo.votes).includes(authedUser);
    //       if(existsInOne || existsInTwo)
    //       {
    //         answered.push(questions[key]);
    //       }
    //       else 
    //       {
    //         unanswered.push(questions[key]);
    //       }   
    //   }
    // }
//#endregion

    let { true: answered, false: unanswered } = 
    Object.keys(questions)
    .sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
    .reduce((key,index)=>{ 
      key[questions[index].optionOne.votes.includes(authedUser)
          || questions[index].optionTwo.votes.includes(authedUser)].push(index);
      return key; 
    }, { true: [], false: [] });

    // console.log("answered : ",answered);
    // console.log("unanswered : ",unanswered);

    return {
      ansQuestionsIds: answered, 
      unAnsQuestionsIds: unanswered,
      // questionIds: Object.keys(questions)
			// .sort((a,b) => questions[b].timestamp = questions[a].timestamp)
    }
  }


export default connect(mapStateToProps)(Dashboard)
