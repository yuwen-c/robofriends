import React from 'react';


const Scroll = (prop) =>{
	return (
		<div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
			{prop.children};
		</div>
		);
}

export default Scroll;