import React, { Component } from "react";
import BeyCard from "./BeyCard"

export default class Favorites extends Component {
  render() {
    // console.log("Here are the props from the favorites component:", this.props.favorites)
    // console.log("Here are the props from the favorites component:", this.props.clickHandler)
    let favoriteBeys = this.props.favorites.map(bey => <BeyCard bey={bey} key={bey.id} clickHandler={this.props.clickHandler}/>)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        { favoriteBeys }
      </div>
    );
  }
}
