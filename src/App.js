
import React from 'react';
import Acquirenti from './components/acquirenti';
import './App.css';
import Merce from './components/merce';
import Ordine from './components/ordine';
import Categoria from './components/categoria';
import NavBar from './components/navBar';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';
import Jombotron from './components/jombotron';

function App() {
  return (
    <div>
     <NavBar/>
     <Jombotron/> 
     <Container>
 {/* <Acquirenti/>
 <Merce/>
 <Ordine/>
 <Categoria/> */}
  </Container>
 <Footer/>
    </div>
  );
}

export default App;
