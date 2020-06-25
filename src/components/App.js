import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import PrivateRoute from './PrivateRoute'


class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <Router>
        <Fragment>
          <div className='continer'>
            <LoadingBar style={{ backgroundColor: "#4dd0e1"}}/>
                <Navbar/>
                <Switch>
                  <Route path='/' exact component={Login}/>
                  <PrivateRoute path='/home' exact component={Dashboard} />
                  <PrivateRoute path='/leaderboard' exact component={LeaderBoard}/>
                  <PrivateRoute path='/add' exact component={AskQuestion} />
                  <PrivateRoute path='/question/:id' exact component={AnswerQuestion} />
                  <PrivateRoute component={PageNotFound} />
                </Switch>  
          </div>
        </Fragment>
      </Router>
    )
  }

}
function mapStateToProps() {
  return{
  }
}
export default connect(mapStateToProps)(App);
