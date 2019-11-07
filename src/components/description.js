import React from "react";
import { CardText } from 'reactstrap';

const NasaDesc = props => {
  console.log(props)
  return (
    <CardText>{props.nasa.explanation}</CardText>
  )
}

export default NasaDesc