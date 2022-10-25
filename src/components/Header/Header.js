import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Clogo from './clogo.png'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Image, OverlayTrigger, Tooltip, } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="md" bg="info" variant="info" className='navbar text-white'>
            <Container>
                <Link to='/'>
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
                        {/* conditional formating for new and existing user */}
                        <>
                            {/* conditional formating for image with tooltip */}
                            {
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
                                >
                                    {({ ref, ...triggerHandler }) => (
                                        user?.photoURL ?
                                            <Image
                                                ref={ref}
                                                style={{ height: '30px' }}
                                                rounded
                                                src={user?.photoURL}
                                                {...triggerHandler}
                                            />
                                            :
                                            <FaUser></FaUser>
                                    )}
                                </OverlayTrigger>

                            }
                        </>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <button onClick={handleLogOut} className='btn btn-primary btn-sm ms-2'>Logout</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='ms-2'>Login</Link>
                                        <Link to='/register' className='ms-2'>Register</Link>
                                    </>
                            }
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;