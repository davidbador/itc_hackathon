import React from 'react';
import logo from '../logo/logo.png'
import spin from '../logo/spin.png'

function Home() {
	return (
		<div className='App-header'>
			<img className='Spin' src={spin}></img>
			<img className='Logo' src={logo}></img>
			<h1>test!!!</h1>
		</div>
	);
};

export default Home;

