import React from 'react';
import logo from '../logo/logo.png'
import spin from '../logo/spin.png'

function Home() {
	return (
		<div className='Home'>
			<img className='Spin' src={spin} alt="spin"></img>
			<img className='Logo' src={logo} alt="logo"></img>
			<h1 className='About'>CorPortunity is a platform that allows investors and entrepreneurs alike
			to find their next opportunity during and after the Corona epidemic. When an
			entity registers with CorPortunity, we make sure to reach out to their point
			of contact within 24 hours or less in order to assess all the necessary
			information our platform needs to display to the public.
			Capitalism is a well oiled machine and once a business sees it is on its
			way down the slope,
			  CorPortunity will be there to help it reach its goal(s) during and after these uncertain times.</h1>
		</div>
	);
};

export default Home;