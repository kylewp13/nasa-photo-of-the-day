import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaTitle from "./title";
import NasaImg from "./img";
import NasaDesc from "./description";

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
    <div>
      <NasaTitle nasa={nasa}/>
      <NasaImg nasa={nasa}/>
      <NasaDesc nasa={nasa}/>
    </div>
    )
  };