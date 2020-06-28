import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

export class AskQuestion extends Component {
    state ={
        optionOne:'',
        optionTwo:'',
        toHome: false,
    }

    handleChange = (e) =>{
        const value = e.target.value;
        const inputName= e.target.name;

        this.setState(() => ({
            [inputName]: value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {optionOne , optionTwo } = this.state
        const { dispatch } =this.props

        dispatch(handleAddQuestion({
            optionOne,
            optionTwo,
        }))

        this.setState(() => ({
            toHome: optionOne ? true : false,
            optionOne : '',
            optionTwo : '',
        }))
        
    }

    render() {
        const { optionOne , optionTwo ,toHome } = this.state
        if (toHome === true) {
            return <Redirect to='/home' />
        }
        return (
            <form onSubmit={this.handleSubmit} className="row">
                <div id="test1" className="col s6 offset-s3">
                <ul className="collection with-header">
                        <li className="collection-header center-align"><h6>Create New Question</h6></li>
                        <li className="collection-item">
                        <div className="row">
                            <h6>Complete the question:</h6>
                        </div>
                        <h6>Would you rather ...</h6>
                        
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="optionOne"
                                       name="optionOne"
                                       onChange = {this.handleChange}
                                       value = {optionOne}
                                       type="text"/>
                                <label htmlFor="optionOne">Enter Option One Text Here</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="optionTwo"
                                       onChange = {this.handleChange}
                                       name="optionTwo"
                                       value = {optionTwo}
                                       type="text"/>
                                <label htmlFor="optionTwo">Enter Option Two Text Here</label>
                            </div>
                        </div>
                        <div className="row center-align">
                            <button className={`btn waves-effect waves-light'}`}
                                    type="submit">
                                    Submit
                            </button>
                        </div>
            
                        </li>
                    </ul>
                </div>
          </form>
        )
    }
}

export default connect()(AskQuestion)

