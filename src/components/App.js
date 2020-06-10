import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import Navbar from './Navbar'
import LoadingBar from 'react-redux-loading'

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
            <Dashboard/>
          </div>
      </div>
    )
  }

}

export default connect()(App);
