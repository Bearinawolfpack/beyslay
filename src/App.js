import React from "react";
import "./App.css";
import  BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"
import beyArray from "./api"
import BeyForm from "./BeyForm"


class App extends React.Component {

  state = {
    beyArray: beyArray //used by beyContainer
  } // App state

     // adds to favorites list by making favorite === true
    clickHandler = (id) => {
      let newBeyArray = [...this.state.beyArray] //used by favorites
      let myBey = newBeyArray.find(bey => bey.id === id)
      myBey.favorite = !myBey.favorite;
      this.setState({beyArray: newBeyArray})
    } // .clickHandler

    // removes from favorites list by making favorite === false
    favoritesClickHandler = (id) => {
      let newBeyArray = [...this.state.beyArray]
      let myBey = newBeyArray.find(bey => bey.id === id)
      myBey.favorite = !myBey.favorite;
      this.setState({beyArray: newBeyArray})
    } // .favoritesClickHandler

    filteredBeys = () => {
      return this.state.beyArray.filter(bey => bey.favorite)
    }

    submitHandler = (obj) => {
      console.log("Object that is supposed to be added to index from app:", obj)
      this.setState({ beyArray: [obj, ...this.state.beyArray] })
      console.log("What state looks like in app after submission:", this.state)
    }


  render(){
    return (
      <div className="container">
        <BeyForm submitHandler={this.submitHandler}/>
        <BeyContainer beys={beyArray} clickHandler={this.clickHandler}/>
        <Favorites favorites={this.filteredBeys()} clickHandler={this.favoritesClickHandler}/>
      </div>
    );
  } // .render
  
}; // App Class

export default App;
