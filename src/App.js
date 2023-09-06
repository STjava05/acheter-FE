
import React from 'react';

import './App.css';

import NavBar from './components/navBar';
import Footer from './components/footer';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Merce from './components/merce';
import Ordine from './components/ordine';
import Categoria from './components/categoria';
import Acquirenti from './components/acquirenti';
import { Container } from 'react-bootstrap';
import Menu from './components/menu';
import Contact from './components/Contact';






function App() {
  return (
    <Router>
     <NavBar/>
     
     <Container>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/menu'  element={<Menu/>}/>
        <Route path='/merce'  element={<Merce/>}/>
        <Route path='/ordine'  element={<Ordine/>}/>
        <Route path='/categoria'  element={<Categoria/>}/>
        <Route path='/acquirenti'  element={<Acquirenti/>}/>
        <Route path='contact'  element={<Contact/>}/>
      </Routes>
        </Container>
     
 <Footer/>
    </Router>
    
  );
}

export default App;
