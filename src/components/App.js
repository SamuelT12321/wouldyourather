import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import Navbar from './Navbar'
import LoadingBar from 'react-redux-loading'
import AnswerQuestion from './AnswerQuestion'
import QuestionCard from './QuestionCard'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import AskQuestion from './AskQuestion'


class App extends Component{
  componentDidMount(){
  	this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <Router>
        <div>
          <div className='continer'>
            <LoadingBar style={{ backgroundColor: "#4dd0e1"}}/>
              {this.props.loading=== true ? null :
                <div>
                <Navbar/>
                <Route path='/' exact component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/add' component={AskQuestion} />
                <Route path='/question/:id' component={AnswerQuestion}/>
                </div>
                
              }
              {/* <AskQuestion /> */}
                {/* <LeaderBoard /> */}
                {/* <Login /> */}
                {/* <QuestionCard id='am8ehyc8byjqgar0jgpub9'/> */}
                {/* <AnswerQuestion id='6ni6ok3ym7mf1p33lnez'/> */}
                {/* <Dashboard/> */}
          </div>
        </div>
      </Router>
    )
  }

}

export default connect()(App);
