import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleAddQuestionAnswer } from '../actions/questions'
import M, { objectSelectorString } from 'materialize-css/dist/js/materialize.min.js'
//https://codesandbox.io/s/charming-cannon-1x128?file=/src/Select.js:276-311

export class AnswerQuestion extends Component {
    state={
        selectedOption:'',
    }
    handleChange = (e) => {
        const selectedOption = e.target.value

        this.setState(() => ({
            selectedOption,
        }))
      }
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, authedUser, id } =this.props
        dispatch(handleAddQuestionAnswer({
            authedUser,
            qid: id,
            answer : this.state.selectedOption,
        }))
    }
    render() {
        //console.log(this.props);
        const { question, users, authedUser } = this.props;
        const { avatar, id, name, optionOneText, optionTwoText, optionOneAnsLen, optionTwoAnsLen } = question;
        const answers =! users[authedUser] ? null : 
                  (!users[authedUser].answers ? null : users[authedUser].answers);
        let answered = null;
        if (answers!== null){
            if(answers[id])
            answered=answers[id];
        }   
        const totalAns = optionOneAnsLen + optionTwoAnsLen;

        let optionOnePercentage ='0%'
        let optionTwoPercentage ='0%'
        if(answered){
            //any logic related to answered page
            optionOnePercentage=  optionOneAnsLen/totalAns * 100+ '%'
            optionTwoPercentage= optionTwoAnsLen/totalAns * 100+ '%'
        }
        //style
        const optionOneProBarstyle = { width: optionOnePercentage, animation: "grow 2s" };
        const optionTwoProBarstyle = { width: optionTwoPercentage, animation: "grow 2s" };
        
        return (
            
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            {answered && 
                                <span className="card-title">Result</span>
                            }
                            <img alt='avatar center img' className="imgcenter" src={avatar}/>
                            
                                {!answered  
                                ?<span className="card-title">{name} ask would you rather</span>
                                :<span className="card-title">Asked by {name}</span>
                                }
                            {!answered &&
                                <div>
                                    <form onSubmit={this.handleSubmit}>
                                        <ul className="collection">
                                            <li className="collection-item">
                                                <label>
                                                    <input type="radio" 
                                                        name="group1" 
                                                        value="optionOne"
                                                        checked={this.state.selectedOption === "optionOne"}
                                                        onChange={this.handleChange}
                                                        />
                                                    <span>{optionOneText}</span>
                                                </label>
                                            </li>
                                            <li className="collection-item">
                                                <label>
                                                    <input type="radio" 
                                                        name="group1" 
                                                        value="optionTwo"
                                                        checked={this.state.selectedOption === "optionTwo"}
                                                        onChange={this.handleChange}
                                                        />
                                                    <span>{optionTwoText}</span>
                                                </label>
                                            </li>
                                        </ul>
                                        <div className="card-action center-align">
                                        <button className={`btn waves-effect waves-light ${this.state.selectedOption===''? "disabled" : ''}`}
                                                type="submit">
                                                Submit
                                        </button>
                                    </div>
                                    </form>
                                </div>
                            }
                            {answered &&
                            <div>
                                <ul className="collection">
                                    <li className={"collection-item "+ (answered === 'optionOne' ? 'teal lighten-5' : '') }>
                                        <label>
                                            <span>{optionOneText}</span>
                                            {answered === 'optionOne' && <span className="badge orange lighten-3 white-text">Your vote</span>}
                                        </label>
                                        <div id="modded">
                                            <div className="progress blue lighten-4 tooltipped" data-position="top" data-tooltip="Progress was at 50% when tested">
                                            <span>Progress</span>
                                            <div className="determinate blue" style={optionOneProBarstyle}>{optionOnePercentage}</div>
                                        </div>
                                    </div>
                                    <div className="center-align">
                                        <span className="grey-text">{optionOneAnsLen} out of {totalAns} votes</span>
                                    </div>
                                    </li>
                                    <li className={"collection-item "+ (answered === 'optionTwo' ? 'teal lighten-5' : '') }>
                                        <label>
                                            <span>{optionTwoText}</span>
                                            {answered === 'optionTwo' && <span className="badge orange lighten-3 white-text">Your vote</span>}
                                        </label>
                                        <div id="modded">
                                            <div className="progress blue lighten-4 tooltipped" data-position="top" data-tooltip="Progress was at 50% when tested">
                                            <span>Progress</span>
                                            <div className="determinate blue" style={optionTwoProBarstyle}>{optionTwoPercentage}</div>
                                        </div>
                                    </div>
                                    <div className="center-align">
                                        <span className="grey-text">{optionTwoAnsLen} out of {totalAns} votes</span>
                                    </div>
                                    </li>
                                </ul>
                                <div className="card-action center-align">
                                
                                <NavLink className='btn waves-effect waves-light' to='/' exact activeClassName=''>
                                     Return
                                </NavLink>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions},props) {
    const { id } = props.match.params
    const quesiton = questions[id]
    return{
        users,
        authedUser,
        id,
        question: !questions[id]
        ? []
        : formatQuestion(quesiton, users[quesiton.author],authedUser),
    }
}

export default connect(mapStateToProps)(AnswerQuestion)
