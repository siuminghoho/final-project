import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import './App.css';
import { Menu } from './pages/Menu';
function App() {
  return (
    <>
    <Container fluid>
    <div>
    <Menu/>
    </div>
    </Container>
   </>
  );
}

export default App;
