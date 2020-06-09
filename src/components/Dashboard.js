import React, { Component } from 'react'
import { connect } from 'react-redux'
import M, { objectSelectorString } from 'materialize-css/dist/js/materialize.min.js'
import { queries } from '@testing-library/react';

export class Dashboard extends Component {
    componentDidMount(){
        var el = document.querySelectorAll('.tabs');
        var instance = M.Tabs.init(el, {}); 
    }

    render() {
        console.log(this.props);
        return (
            <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s4 offset-s2"><a className="active" href="#test1">Unanswered questions</a></li>
                <li className="tab col s4"><a href="#test3">Answered Questions</a></li>
              </ul>
            </div>
            <div id="test1" className="col s6 offset-s3">
              <ul className="collection">
                <li className="collection-item avatar">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2sxmachyeeHttkep40stxuJzCChYVkEhYfF0BI6rWzh1FQyQZ&usqp=CAU" alt="" className="circle" />
                  <span className="title">Jane Doe ask</span>
                  <p className="truncate">
                      Ask would you rather<br></br>
                      the aliens that make first contact be robotic or organic.
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">View Poll</i></a>
                </li>
                <li className="collection-item avatar">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaLdxf3ayHfsQc8FSsGdT7N4U-AaEvS0kSYfFZC-pj_VprT9u-&usqp=CAU" alt="" className="circle" />
                  <span className="title">Jane Doe ask</span>
                  <p className="truncate">
                      Ask would you rather <br></br>
                      the aliens that make first contact be robotic or organic.
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">View Poll</i></a>
                </li>
                <li className="collection-item avatar">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS_kGSZDoakaIg6tpOvkLS_8mNBWHEjP9D_KoJ2q-jwfAEG8EZ&usqp=CAU" alt="" className="circle" />
                  <span className="title">Samuel Tam ask</span>
                  <p className="truncate">
                      Ask would you rather <br></br>
                      the aliens that make first contact be robotic or organic.
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">View Poll</i></a>
                </li>
                <li className="collection-item avatar">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeOhSDDzexsJRS0E0EjLK9uoi2sLPiVMoRGQNoFjDe_5I7Km23&usqp=CAU" alt="" className="circle" />
                  <span className="title">Petter ask</span>
                  <p className="truncate">
                      Ask would you rather <br></br>
                      the aliens that make first contact be robotic or organic.
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">View Poll</i></a>
                </li>
              </ul>	    	
    
    
            </div>
            <div id="test3" className="col s6 offset-s3">Test 2</div>
          </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser }) {
    let answered = [];
    let notanswer = [];

    for (const key in questions) { 
      //optional check for properties from prototype chain
      if (questions.hasOwnProperty(key)) {
          let existsInOne = Object.values(questions[key].optionOne.votes).includes(authedUser);
                            
          let existsInTwo = Object.values(questions[key].optionTwo.votes).includes(authedUser);
          if(existsInOne || existsInTwo)
          {
            answered.push(questions[key]);
          }
          else 
          {
            notanswer.push(questions[key]);
          }   
      }
    }


    let { true: with_, false: without } = 
    Object.keys(questions)
    .sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
    .reduce((key,index)=>{ 
      key[questions[index].optionOne.votes.includes(authedUser)
          || questions[index].optionTwo.votes.includes(authedUser)].push(index);
      return key; 
    }, { true: [], false: [] });


    console.log("with_ : ",with_);
    console.log("without : ",without);

    return {
      ansQuestions: answered
        .sort((a,b) =>b.timestamp - a.timestamp)
        .map((an)=>an.id),
      
      unAnsQuestions: notanswer
        .sort((a,b) =>b.timestamp - a.timestamp)
        .map((an)=>an.id),
        //.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
  }


export default connect(mapStateToProps)(Dashboard)
