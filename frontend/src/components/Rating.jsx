import React from 'react';

function Rating() {
    return (
        <div className='App-header' style={{  background: 'transparent'}}>
			<div className='Rating'>
				<div className='Rate-box'>
					<h1>Yaakov S.</h1>
					<h3>Amazing service!</h3>
					<h1 style={{color:'#CAD700'}}>{String.fromCharCode(9733, 9733, 9733, 9733)}</h1>
				</div>
				<div className='Rate-box'>
					<h1>Jon G.</h1>
					<h3>Great idea on those hard times</h3>
					<h1 style={{color:'#CAD700'}}>{String.fromCharCode(9733, 9733, 9733, 9733, 9733)}</h1>
				</div>
				<div className='Rate-box'>
					<h1>Hen B.</h1>
					<h3>Google should invest in those geniuses!</h3>
					<h1 style={{color:'#CAD700'}}>{String.fromCharCode(9733, 9733, 9733, 9733, 9733)}</h1>
				</div>
				<div className='Rate-box'>
					<h1>Yonatan K.</h1>
					<h3>Not a fake review at all</h3>
					<h1 style={{color:'#CAD700'}}>{String.fromCharCode(9733, 9733, 9733, 9733, 9733)}</h1>
				</div>
			</div>
			<h3 style={{color:'black'}}>Contact us: corportunity@gmail.com</h3>
		</div>
    );
};

export default Rating;