import React from "react";
import "./App.css";
import BeyContainer from "./BeyContainer";
import Favorites from "./Favorites";
import beyArray from "./api";
import BeyForm from "./BeyForm";
import BeySearch from "./BeySearch";

class App extends React.Component {
	state = {
    beyArray: beyArray, //used by beyContainer
    searchValue: ""
	}; // App state

	changeHandler = (event) => {
    // console.log(event.target.value)
    this.setState({searchValue: event.target.value})
  };

	// adds to favorites list by making favorite === true
	clickHandler = (id) => {
		let newBeyArray = [...this.state.beyArray]; //used by favorites
		let myBey = newBeyArray.find((bey) => bey.id === id);
		myBey.favorite = !myBey.favorite;
		this.setState({ beyArray: newBeyArray });
	}; // .clickHandler

	// removes from favorites list by making favorite === false
	favoritesClickHandler = (id) => {
		let newBeyArray = [...this.state.beyArray];
		let myBey = newBeyArray.find((bey) => bey.id === id);
		myBey.favorite = !myBey.favorite;
		this.setState({ beyArray: newBeyArray });
	}; // .favoritesClickHandler

	filteredFavoriteBeys = () => {
		return this.state.beyArray.filter((bey) => bey.favorite && bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()));
  };
  
  filteredBeys = () => {
    return this.state.beyArray.filter(bey => bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

	submitHandler = (obj) => {
		// console.log("Object that is supposed to be added to index from app:", obj)
		this.setState({ beyArray: [obj, ...this.state.beyArray] });
		// console.log("What state looks like in app after submission:", this.state)
	};
  
  
	
	// console.log(filteredBeyArray)

	render() {
		return (
			<div className="container">
				<BeyForm submitHandler={this.submitHandler} />
				<BeySearch searchValue={this.state.searchValue} changeHandler={this.changeHandler} />
				<BeyContainer
					beys={this.filteredBeys()}
					clickHandler={this.clickHandler}
				/>
				<Favorites
					favorites={this.filteredFavoriteBeys()}
					clickHandler={this.favoritesClickHandler}
				/>
			</div>
		);
	} // .render
} // App Class

export default App;
