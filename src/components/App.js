import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import Navbar from './Navbar'
import LoadingBar from 'react-redux-loading'
import AnswerQuestion from './AnswerQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import AskQuestion from './AskQuestion'
import PageNotFound from './PageNotFound'


class App extends Component{
  componentDidMount(){
  	this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <Router>
        {this.props.authedUser === null && <Redirect to="/login" />}
        <Fragment>
          <div className='continer'>
            <LoadingBar style={{ backgroundColor: "#4dd0e1"}}/>
                <Navbar/>
                <Switch>
                    <Fragment>
                        <Route path='/login' exact component={Login}/>
                        <Route path='/' exact component={Dashboard} />
                        <Route path='/leaderboard' component={LeaderBoard}/>
                        <Route path='/add' component={AskQuestion} />
                        <Route path='/question/:id' component={AnswerQuestion} />
                    </Fragment>
                  <Route component={PageNotFound} />
                </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }

}
function mapStateToProps({authedUser}) {
  return{
      authedUser,
  }
}
export default connect(mapStateToProps)(App);
