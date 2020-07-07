import React from 'react';
import CardList from '../component/CardList.js';
//import {robots} from '../component/robots.js';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll.js';
import ErrorBoundary from '../component/ErrorBoundary.js';

// to communicate the two components, searchBox and robots, we need 'state'
// const state = {
// 	robots:'robots', //robots array
// 	searchfield:'' // inputbox
// }

// const App = () => {
// 	return(
// 		<React.Fragment>
// 			<div className="tc">
// 				<h1>RobotFriends</h1>
// 				<SearchBox/>	
// 				<CardList robots={robots}/>
// 			</div>
// 		</React.Fragment>
// 		)
// }

// to use state syntax, a class is required.
class App extends React.Component {
	constructor(){
		super()    // before this, super() is called.
		this.state = {
			robots: [], // in real world, we get data from server instead of importing a file
			searchfield:''
		}
	}
	// this function has a random name. App listens to the changes.
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value});
			// update searchfield everytime, otherwise it's "" forever. 
		//console.log(filteredRobots); //listen to changes in searchbox
	}
	componentDidMount(){
		// fetch is a method of window object, it allows us to make requests to server.
		fetch('http://jsonplaceholder.typicode.com/users') // go to this url and get data
			.then(response => {	return response.json();})
			.then(users => {this.setState({robots: users})})  //update state
	}
	render(){      // also, a render in class is needed.
		const {robots, searchfield} = this.state; // for short writing, not repeating this.state
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		}) 
		// if data is so huge, we can use a if statement, then the original empty [] shows loading.
		// after this.setState, robots will show.
		if (robots.length === 0){
			return(<h1 className='tc'>Loading....</h1>)
		}
		else{
		return(	
			<div className="tc">
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>	
				{/*  anytime when the searchbox changes, it triggers the searchChange function.
				 */}
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/> { /*CardLists receives robots from state*/}
					</ErrorBoundary>
				</Scroll>
			</div>
		) 
		} 
	}
}

export default App;