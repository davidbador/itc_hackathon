import React, { Component } from 'react';
import { register } from '../lib/CorPortunityFunctions';
import { withRouter } from 'react-router-dom';

class RegisterInvestor extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()

        const newInvestor = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        register(newInvestor).then(res => {
            this.props.history.push('/login')
        })
    }

    render() {
        return (
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" placeholder="Enter Your First Name" value={this.state.firstName} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" placeholder="Enter Your Last Name" value={this.state.lastName} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <button type="submit">
                        Sign up
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(RegisterInvestor)