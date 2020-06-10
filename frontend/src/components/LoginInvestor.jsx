import React from 'react';
import { login } from '../lib/CorPortunityFunctions';
import { withRouter } from "react-router-dom";


class LoginInvestor extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        if (user.email === '' || user.password === '') {
            window.alert('Please make sure all fields are filled in!')
        } else {
            login(user).then(res => {
                if (localStorage.usertoken !== "undefined") {
                    this.props.history.push('/opportunities')
                } else {
                    window.alert('Wrong email or password. Please try again!')
                    localStorage.removeItem('usertoken')
                }
            })
        }
    }

    render() {
        return (
            <div className='Black-text Form-class'>
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <button className='Sign-up'>
                        Log in
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginInvestor)