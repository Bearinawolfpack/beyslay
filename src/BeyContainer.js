import React from "react";
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  render() {
    console.log("BeyArray from inside BeyContainer:", this.props.beys)
    const beyList = this.props.beys.map(bey => <BeyCard bey={bey} key={bey.id} clickHandler={this.props.clickHandler}/>)
    return (
      <div className="index">
        <h1>Index</h1>
        { beyList }
      </div>
    );
  }
}

export default BeyContainer;
