



import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PostLogin } from '../reducers/apiSlice';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    const loginPayload = {
      email: email,
      password: password,
    }
    dispatch(PostLogin(loginPayload))
    .then((response) => {
      // if (response.payload.token) {
        localStorage.setItem('userLogin', JSON.stringify(response.payload.token));
        navigate('/home');
      // } else {
      //   alert(response.payload.message);
      // }
    })
    .catch((error) => {
      console.log(error);
    });

   setEmail('');
    setPassword('');
}




  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>Don't have an account? <Link to="/acquirenti">Signup</Link></p>
      </Form>
    </Container>
  );
}
export default Login;



