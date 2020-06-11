import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

export class QuestionCardAnswer extends Component {
    render() {
         //const { question } = this.props;
        // const { avatar, id, name, optionOneText, optionTwoText } = question
        //console.log("quesiton : " + quesiton);
        return (
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card blue-grey darken-1">
                        {/* <div className="card-content white-text">
                        <img className="imgcenter" src={avatar}/>
                        <span className="card-title">{name} ask would you rather</span>
                        <ul className="collection">
                            <li className="collection-item">
                                <label>
                                    <input type="radio" name="group1"/>
                                    <span>{optionOneText}</span>
                                </label>
                            </li>
                            <li className="collection-item">
                                <label>
                                    <input type="radio" name="group1"/>
                                    <span>{optionTwoText}</span>
                                </label>
                            </li>
                        </ul>
                        </div> */}
                        <div className="card-action center-align">
                        <a className="" href="#">Submit</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps({authedUser, users, questions},{id}) {
    const quesiton = questions[id]
    console.log(typeof quesiton) 
    
    console.log("authedUser : "+authedUser);
    console.log("quesiton : "+ JSON.stringify(quesiton));
    console.log("id : "+id)
    return{
        authedUser,
        //question: formatQuestion(quesiton, users[quesiton.author],authedUser)
    }
}

export default connect(mapStateToProps)(QuestionCardAnswer)
