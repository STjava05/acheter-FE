



import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PostLogin } from '../reducers/apiSlice';
import { Link,useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';


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

      if (response && response.payload && response.payload.token) {
        localStorage.setItem('userLogin', JSON.stringify(response.payload.token));
        navigate('/home');
      } else {
        console.error('La risposta non contiene un token valido.');
      }
     
        
     
    })
    .catch((error) => {
      console.log(error);
    });

   setEmail('');
    setPassword('');
}

const handleGithubLogin = (e) => {
  e.preventDefault();
  window.location.href = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/github`;
}
const handleGoogleLogin = (e) => {
  e.preventDefault();
  window.location.href = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/google`;
}


  return (
    <Container>
      <div className='loginBackground'>
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
      <Button onClick={handleGithubLogin} className='p-2 m-4 bg-secondary rounded text-white' type="submit">
      <AiFillGithub size={20} />
      Login with Github
        </Button>

        <Button onClick={handleGoogleLogin} className='p-2 m-4 bg-secondary rounded text-white' type="submit">
      <FcGoogle size={20} />
      Login with Google
        </Button>
      </div>
    </Container>
  );
}
export default Login;



