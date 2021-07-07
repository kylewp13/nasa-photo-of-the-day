import React from "react";
import "./App.css";
import BodyApp from "./components/body";
import { Container, Row } from 'reactstrap';
import NasaNav from "./components/nav"

function App() {
  return (
    <div className="App">
      <NasaNav />
      <Container>
        <Row>
          <BodyApp />
        </Row>
      </Container>
    </div>
    );
  }
  
  export default App