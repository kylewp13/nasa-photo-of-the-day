import React from "react";
import { CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const NasaTitle = props => {
  // console.log(props)
  return (
    <CardBody>
      <CardTitle>{props.nasa.title}</CardTitle>
      <CardSubtitle>Date: {props.nasa.date}</CardSubtitle>
    </CardBody>
  )
}

export default NasaTitle