import React, { Component } from 'react';
import { businesses } from '../lib/CorPortunityFunctions'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            height: 2
        }}
    />
);

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
            <>
                <h1>Test</h1>
                <a target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSfkBwBt1IVitTuG5nHG5PS3n_yQkCQztXR77PC7eHLyFZc0xQ/viewform?usp=sf_link'>Join us! </a>
                {this.state.businesses.map((el) => el.businesses.map((c, i) => (
                    <div key={i} className="Selling">
                        <div className="w3-card-4">
                        <header className="w3-container w3-light-green">
                            <h3>Company name:{c.company}</h3>
                            <ColoredLine color="grey" />
                        </header>
                        <div className="w3-container">
                            <p>Contact name: {c.contact_name}</p>
                            <p>Contact phone:{c.phone}</p>
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
                        <h3>Company name: random</h3>
                        <ColoredLine color="grey" />
                      </header>
                      <div className="w3-container">
                      <p>Contact name: random name</p>
                        <p>Contact number: 1234567</p>
                        <p>Company location: random also</p>
                        <p>Fields: toys health real estate</p>
                        <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p>
                      </div>
                    </div>
                    </div>

            </>
        )
    }
}

export default Businesses