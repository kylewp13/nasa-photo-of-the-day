import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaTitle from "./title";
import NasaImg from "./img";
import NasaDesc from "./description";
import { Card, CardBody, Col } from 'reactstrap';

export default function BodyApp() {
  const [nasa, setNasa] = useState([])
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response)=>{
      console.log(response)
      setNasa(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])

  return (
    <Col lg={{ size: 6, offset: 3 }}>
      <Card>
        <NasaTitle nasa={nasa}/>
        <NasaImg nasa={nasa}/>
        <CardBody>
          <NasaDesc nasa={nasa}/>
        </CardBody>
      </Card>
    </Col>
    )
  };