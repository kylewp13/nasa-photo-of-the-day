import React from "react";

const NasaDesc = props => {
  // console.log(props)
  return (
    <div>
      <p>{props.nasa.explanation}</p>
    </div>
  )
}

export default NasaDesc