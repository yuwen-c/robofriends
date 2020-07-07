import React from 'react';
import Card from './Card.js';

// 把冗的[0], [1]取代掉，用array方法: map
const CardList = ( {robots} ) => {
	//const CardsArray = 
	if(true){
		//throw new Error('ohhh noooooo!!!!')   // an error message for developer
	}
	return (
		<div>
			{
			robots.map((card, index) => {//每個robot 資料要進一張card
				return (
				  <Card 
					key={robots[index].id}
					//key: Each child in an array should have a unique key prop, 
				 	id={robots[index].id} 
				 	name={robots[index].name} 
				 	username={robots[index].username} 
				 	email={robots[index].email}
				 	/>
				);
			}) 
		}
		</div>
	);
}

// /* 207. App2.
// * 這邊不明白的點：
// * 1. 傳入參數( {robots} )
// * 2. 在map method裡面為何不用參數card而是用robots? 因為在{}裡面嗎？
// * 3. return的 map結果 要用{ }包起來 因為是javascript
// *
// */
export default CardList;

