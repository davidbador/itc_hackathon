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
                    <div>
                        <label> Countries you are interested in investing in:
                            <input type="checkbox" name="ARE" value="ARE" />ARE
                            <input type="checkbox" name="AUS" value="AUS" />AUS
                            <input type="checkbox" name="BRA" value="BRA" />BRA
                            <input type="checkbox" name="CAN" value="CAN" />CAN
                            <input type="checkbox" name="CHE" value="CHE" />CHE
                            <input type="checkbox" name="CHN" value="CHN" />CHN
                            <input type="checkbox" name="DEU" value="DEU" />DEU
                            <input type="checkbox" name="GBR" value="GBR" />GBR
                            <input type="checkbox" name="IND" value="IND" />IND
                            <input type="checkbox" name="ISR" value="ISR" />ISR
                            <input type="checkbox" name="JPN" value="JPN" />JPN
                            <input type="checkbox" name="NLD" value="NLD" />NLD
                            <input type="checkbox" name="USA" value="USA" />USA
                        </label>
                    </div>
                    <div>
                        <label> Industries you are interested in investing in:
                            <input type="checkbox" name="food" value="Food and Beverage" />Food and Beverage
                            <input type="checkbox" name="tech" value="Tech" />Tech
                            <input type="checkbox" name="health" value="Health" />Health
                            <input type="checkbox" name="toys" value="Toys" />Toys
                            <input type="checkbox" name="fashion" value="Fashion" />
                            <input type="checkbox" name="real" value="Real Estate" />Real Estate
                            <input type="checkbox" name="gaming" value="Gaming" />Gaming
                            <input type="checkbox" name="marketing" value="Marketing" />Marketing
                        </label>
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