import React, { Component } from 'react'
import M, { objectSelectorString } from 'materialize-css/dist/js/materialize.min.js'
export class LoginFrom extends Component {
    
    componentDidUpdate(){
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
       console.log("component did mount");
    }
    

    render() {
        const {users , authedUser, userList} = this.props

        const optionList = userList.map((key) => {
            const {id, name , avatarURL} = key
            return <option key={id} value={id} data-icon={avatarURL} className="left">{name}</option>
        })
        console.log("optionList: ",optionList)

        return (
            <form>
                <div className="row">
                    <div className="input-field col s12">
                            <select className="icons" 
                                    name="login"
                                    onChange={(event) => this.props.onSelectUser(event.target.value)}
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
        )
    }
}

export default LoginFrom
