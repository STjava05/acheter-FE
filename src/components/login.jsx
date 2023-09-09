
 import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostLogin } from '../reducers/apiSlice'
import { Container,Form,Button } from 'react-bootstrap';




function Login() {
 const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[tipologiaUtenza,setTipologiaUtenza]=useState('');
   const disppatch=useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
        

        const loginPayload={
            email:email,
            password:password,
            tipologiaUtenza:tipologiaUtenza
        }
        disppatch(PostLogin(loginPayload));

        setEmail('');
        setPassword('');
        setTipologiaUtenza('');

    }


    return (
        <Container>
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Inserisci email" onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Inserisci password" onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicTipologiaUtenza">
                    <Form.Label>Tipologia Utenza</Form.Label>
                    <Form.Control type="tipologiaUtenza" placeholder="Inserisci tipologia utenza" onChange={(e)=>setTipologiaUtenza(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

                   

           
        </div>
        </Container>    
    )
}

export default Login


