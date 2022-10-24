import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Clogo from './clogo.png'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar' fixed='top'>
            <Container>
                <Link to="/">
                    <img src={Clogo} height='25' width='25' alt="" className='me-1' />
                    Fun With Programming
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5 ps-5">
                        <NavLink to="/courses">Courses</NavLink>
                        <NavLink to="/blog" className={'ms-4'}>Blog</NavLink>
                        <NavLink to="/faq" className={'ms-4'}>FAQ</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink to="/login" className={'me-3'}>Login</NavLink>
                        <NavLink to="/register">Register
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;