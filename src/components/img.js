import React from "react";

const NasaImg = props => {
  // console.log(props)
  return (
    <div>
      <img src={props.nasa.hdurl} className="NASA-image" alt="random space"/>
    </div>
  )
}

export default NasaImg