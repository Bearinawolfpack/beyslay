import React from "react";

const BeyCard = (props) => {
  // console.log(props.clickHandler)

  

  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img src={props.bey.img} alt="" onClick={() => props.clickHandler(props.bey.id)}/>
    </div>
  );
};

export default BeyCard;
