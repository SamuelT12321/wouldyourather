import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import Navbar from './Navbar'
import LoadingBar from 'react-redux-loading'
import AnswerQuestion from './AnswerQuestion'
import QuestionCard from './QuestionCard'

class App extends Component{
  componentDidMount(){
  	this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <div>
        <LoadingBar style={{ backgroundColor: "#4dd0e1"}}/>
          <div className='continer'>
            <Navbar/>
            {/* <QuestionCard id='am8ehyc8byjqgar0jgpub9'/> */}
            <AnswerQuestion id='6ni6ok3ym7mf1p33lnez'/>
            {/* <Dashboard/> */}
          </div>
      </div>
    )
  }

}

export default connect()(App);
