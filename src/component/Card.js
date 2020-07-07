import React from 'react';


const Card = ({id, name, username, email}) => {
	//const {id, name, username, email} = robot;
	return (
		// display: inline-block, border-radius, padding all, margin-all, 
		// grow (scale), border-widths, box-shaadow
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/+${username}+?150x150`}/>
			<div>
				<header>{name}</header>
				<p>{username}</p>
				<p>{email}</p>
			</div>
		</div>
		);
}
export default Card;