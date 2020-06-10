import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();
        this.logOut = this.logOut.bind(this)
    }
    logOut(event) {
        event.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/home')
    }

    render() {
        const loginRegLink = (
            <div className='Sign-links'>
                <NavLink
                    to="/login"
                    className='Sign'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }}>
                    Login
                </NavLink>
                <NavLink
                    to="/register"
                    className='Sign'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }}>
                    Register
                </NavLink>
            </div>
        )

        const userLink = (
            <div className='Sign-links'>
            <a href="#" onClick={this.logOut}>
                Logout
            </a>
        </div>
        )

        return (
            <div className='Navbar'>
                <div>
                    <NavLink
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/opportunities"
                        style={{ marginInlineStart: '40px' }}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}>
                        Opportunities
                    </NavLink>
                </div>
                {localStorage.usertoken ? userLink: loginRegLink}
            </div>
        )
    }
}

export default withRouter(NavBar)