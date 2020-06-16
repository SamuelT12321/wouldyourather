import React, { Component } from 'react'
import { connect } from 'react-redux'
import M, { objectSelectorString } from 'materialize-css/dist/js/materialize.min.js'
import LoginFrom from './LoginFrom'

export class Login extends Component {
    state={
        selectedUser:'',
    }

    componentDidUpdate(){
         var elems = document.querySelectorAll('select');
         var instances = M.FormSelect.init(elems, {});
        console.log("component did mount");
    }

    onSelectUser = (e) => {
        const selectedUser = e.target.value
        this.setState(() => ({
            selectedUser,
        }))
      }
 
    render() {
        const {users , authedUser, userList} = this.props

        const optionList = userList.map((key) => {
            const {id, name , avatarURL} = key
            return <option key={id} value={id} data-icon={avatarURL} className="left">{name}</option>
        })
        
        console.log("selectList",optionList)
        return (
            <div className="row">
            <div id="test1" className="col s6 offset-s3">
               <ul className="collection with-header">
                <li className="collection-header center-align"><h6>Welcome to the Would You Rather App!</h6><br></br>Please Sign in to continue</li>
                <li className="collection-item">
                  
                  <div className="row">
                      <div className="input-field col s12 center-align">
                          <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt='' className="circle col s6 offset-s3" />
                      </div>
                  </div>

                  <form>
                    <div className="row">
                        <div className="input-field col s12">
                                <select className="icons" 
                                        name="login"
                                        onChange={(event) => this.onSelectUser(event.target.value)}
                                        defaultValue={'DEFAULT'}>

                                <option value="DEFAULT" disabled >Choose your option</option>
                                {optionList}

                                </select>
                            <label>Sign In</label>
                        </div>
                    </div>
        
                    <div className="row center-align">
                        <button className={`btn waves-effect waves-light btn'}`}
                                type="button">
                                Login
                        </button>
                    </div>
                  </form>
    
                </li>
              </ul>
    
            </div>
          </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {  

    let userList = [];

    for( const key in users)
    {
        if(users.hasOwnProperty(key))
        {
            userList.push(users[key])
        }
    }

    return{
        userList,
        authedUser,
        users,
    }
}
export default connect(mapStateToProps)(Login)
