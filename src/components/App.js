import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import Navbar from './Navbar'

class App extends Component{
  componentDidMount(){
  	this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <div className='continer'>
        <Navbar/>
        <Dashboard/>
      </div>
    )
  }

}

export default connect()(App);
