import React from 'react';
import { useDispatch} from 'react-redux';
import { useRef } from 'react';
import dropLink from '../components/dropLink';
import { setMenu, setSearch } from '../reducers/apiSlice';
import Logo from '../components/assets/logoCapton.jpg'

import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';


function NavBar() {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleSelect = (e) => {
        dispatch(setMenu(e));
    }

    const handleSearch = (e) => {
        dispatch(setSearch(inputRef.current.value));
    }
        

    return (
        <Navbar expand="lg"  style={{backgroundColor:"#171b40"}} >
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src={Logo} alt='logo' height={100} width={100}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='text-light' href="#action1">Home</Nav.Link>
                        <Nav.Link className='text-light' href="#action2">Browser</Nav.Link>
                        <NavDropdown 
                            onSelect={(eventKey) => handleSelect(eventKey)}
                            title="Menu" id="navbarScrollingDropdown" 
                        >
                            {dropLink.map((item, index) => (
        <NavDropdown.Item key={index} eventKey={item.link}>
            {item.title}
        </NavDropdown.Item>
    ))}
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            ref={inputRef}
                            onChange={handleSearch}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
