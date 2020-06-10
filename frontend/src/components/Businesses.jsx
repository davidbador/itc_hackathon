import React, { Component } from 'react';
import { businesses } from '../lib/CorPortunityFunctions'

class Businesses extends Component {
    constructor() {
        super();
        this.state = {
            businesses: []
        }
    }


    componentDidMount() {
        this.loadBusinesses()
    }

    loadBusinesses = async () => {
        const response = await businesses()
        this.setState({
            businesses: [response.data]
        })
    }

    render() {
        return (
            <div className='Spacing'>
                <h2>Do you want to add your company to our website?</h2>
                <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSfkBwBt1IVitTuG5nHG5PS3n_yQkCQztXR77PC7eHLyFZc0xQ/viewform?usp=sf_link'>Click here!</a>
                <h2>Fill out the form and we will get back to you in up to 24 hours</h2>
                {localStorage.usertoken ? null : <h3>You must be a registered user to view the full details of each opportunity</h3>}
                {this.state.businesses.map((el) => el.businesses.map((c, i) => (
                    <div key={i} className="Selling">
                        <div className="w3-card-4">
                            <header className="w3-container w3-light-green">
                                <h3>Company name:{c.company}</h3>

                            </header>
                            <div className="w3-container">
                                {localStorage.usertoken ? <p>Contact name: {c.contact_name}</p> : null}
                                {localStorage.usertoken ? <p>Contact phone:{c.phone}</p> : null}
                                <p>Company location: {c.country}</p>
                                <p>Fields: {c.industry}</p>
                                <p>{c.description}</p>
                            </div>
                        </div>
                    </div>
                )))}
                <div className="Selling">
                    <div className="w3-card-4">
                        <header className="w3-container w3-light-green">
                            <h3>Company name: lorem</h3>
                        </header>
                        <div className="w3-container">
                            {localStorage.usertoken ? <p>Contact name: Barbara</p> : null}
                            {localStorage.usertoken ? <p>Contact number: 1234567</p> : null}
                            <p>company location: JPN</p>
                            <p>Fields: toys marketing</p>
                            <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p>
                        </div>
                    </div>
                    <div className="w3-card-4">
                        <header className="w3-container w3-light-green">
                            <h3>Company name: ipsum</h3>
                        </header>
                        <div className="w3-container">
                            {localStorage.usertoken ? <p>Contact name: Smith</p> : null}
                            {localStorage.usertoken ? <p>Contact number: 1234567</p> : null}
                            <p>company location: USA</p>
                            <p>Fields: fashion food</p>
                            <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p>
                        </div>
                    </div>
                    <div className="w3-card-4">
                        <header className="w3-container w3-light-green">
                            <h3>Company name: random</h3>
                        </header>
                        <div className="w3-container">
                            {localStorage.usertoken ? <p>Contact name: George</p> : null}
                            {localStorage.usertoken ? <p>Contact number: 1234567</p> : null}
                            <p>company location: IL</p>
                            <p>Fields: toys health real estate</p>
                            <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Businesses
