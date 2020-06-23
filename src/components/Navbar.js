import React, { Component,Fragment  } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

export class Navbar extends Component {
    render() {
        const { authedUser, isLogin , name, avatar} = this.props
        // id: 'sarahedo',

        return (
            <Fragment >
                <nav>
                    <div className="nav-wrapper">
                    {isLogin &&
                        <div>
                        <div className="right">
                            <div className="chip loginchip">
                                 <img alt="Avatar Icon" src={avatar} />
                                {name}
                                <a className="secondary-content" href="#!">
                                    <i className="logout material-icons">Logout</i>
                                </a>
                            </div>
                        </div>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li>
                                <NavLink to='/' exact activeClassName=''>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/add' exact activeClassName=''>
                                New Question
                                </NavLink>
                            </li>
                            <li>   
                                <NavLink to='/leaderboard' exact activeClassName=''>
                                Leader Board
                                </NavLink>
                            </li>
                        </ul>
                        </div>
                    }
                    
                    </div>
                </nav>
            </Fragment >
        )
    }
}
function mapStateToProps({authedUser, users}) {
    const isLogin = authedUser === null ? false : true
    //const isLogin = true
    return{
        authedUser,
        isLogin,
        name: isLogin ? users[authedUser].name : "",
        avatar: isLogin ? users[authedUser].avatarURL : ""
    }
}
export default connect(mapStateToProps)(Navbar)
