import React from "react";
import { CardImg } from 'reactstrap';

const NasaImg = props => {
  // console.log(props)
  return (
    <CardImg src={props.nasa.hdurl} className="NASA-image" alt="random space"/>
  )
}

export default NasaImg