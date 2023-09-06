import React from 'react';
import '../App.css';
import Jombotron from '../components/jombotron'


function Contact() {
  return (
   
    <div>
         <Jombotron/> 
      <h1>Contact Us</h1>
      <p>
        You can reach out to us using the following contact information:
      </p>
      <ul>
        <li>Email: ouzin@tiscali.it</li>
        <li>Phone: +39 876-456-7890</li>
        <li>Address: via dell'allora 150/D Firenze Italy</li>
      </ul>
    </div>
    
  );
}

export default Contact;
