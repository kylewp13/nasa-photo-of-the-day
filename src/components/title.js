import React from "react";

const NasaTitle = props => {
  // console.log(props)
  return (
    <div>
      <h1>{props.nasa.title}</h1>
      <h3>{props.nasa.date}</h3>
    </div>
  )
}

export default NasaTitle