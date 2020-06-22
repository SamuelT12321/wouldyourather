import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <div className="right">
                            <div className="chip">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWfgzhHtglQzYKQ1oIgHhNpOTSySglWdJLVh4S53CgkKchXXUM&usqp=CAU"/>
                                Hello, Jane Doe
                                <a className="secondary-content" href="#!">
                                    <i className="logout material-icons right">Logout</i>
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
                </nav>
            </div>
        )
    }
}

export default Navbar
