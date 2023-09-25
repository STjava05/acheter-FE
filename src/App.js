
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Merce from './components/merce';
import Ordine from './components/ordine';
import Acquirenti from './components/acquirenti';
import { Container } from 'react-bootstrap';
import Menu from './components/menu';
import Contact from './components/Contact';
import Login from './components/login';
import ShoppingCart from './components/ShoppingCart';
import Producteur from './components/producteur';
import ProtectedRoutes from './middleware/ProtectedRoutes';
// import Layout from './components/layout';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Success from './components/Success';
import StripeContainer from './components/StripeContainer';


function App() {

  return (
    <Router>
     <NavBar />
     
      <Container>
      
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/success" element={<Success />} />

          <Route element={<ProtectedRoutes />}>
          {/* <Route element={<Layout />}> */}
          <Route path="/home" element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/merce' element={<Merce />} />
           
            <Route path='/ordine' element={<Ordine />} />
            <Route path='/producteur' element={<Producteur />} />
            <Route path='/acquirenti' element={<Acquirenti />} />
            <Route path='/shoppingCart' element={<ShoppingCart />} />
            <Route path='contact' element={<Contact />} />
          </Route>
          {/* </Route> */}
        </Routes>

      </Container>
      
       <Footer />
       {/* <StripeContainer /> */}
    </Router>

  );
}

export default App;


// import React from 'react';
// import './App.css';
// import NavBar from './components/navBar';
// import Footer from './components/footer';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Merce from './components/merce';
// import Ordine from './components/ordine';
// import Acquirenti from './components/acquirenti';
// import { Container } from 'react-bootstrap';
// import Menu from './components/menu';
// import Contact from './components/Contact';
// import Login from './components/login';
// import ShoppingCart from './components/ShoppingCart';
// import Producteur from './components/producteur';
// import EditMerce from './components/EditMerce';
// import useSession from  './middleware/ProtectedRoutes';

// function App() {
//   const isAuthenticated = useSession(); // Usare il hook come funzione

//   return (
//     <Router>
//       <Container>
//         <Routes>
//           <Route path="/home" element={isAuthenticated ? <Home /> : <Login />} />

//           {/* Usare il hook isAuthenticated per proteggere la NavBar */}
//           {isAuthenticated && <Route path="/navBar" element={<NavBar />} />}

//           {/* Rimuovere il ProtectedRoute e utilizzare isAuthenticated */}
//           <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
//           {/* Altre tue rotte protette */}

//           <Route path='/merce' element={<Merce />} />
//              <Route path='/:id/editMerce' element={<EditMerce />} />
//             <Route path='/ordine' element={<Ordine />} />
//            <Route path='/producteur' element={<Producteur />} />
//            <Route path='/acquirenti' element={<Acquirenti />} />
//             <Route path='/shoppingCart' element={<ShoppingCart />} />
//             <Route path='contact' element={<Contact />} />

//         </Routes>
//       </Container>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
