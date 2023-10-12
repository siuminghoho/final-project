import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import './App.css';
import { Admin } from './pages/Admin';
function App() {
  return (
    <>
    <Container fluid>
    <div>
    <Admin/>
    </div>
    </Container>
   </>
  );
}

export default App;
