import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <Form className='w-50 mt-3 mb-3'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Upload your photo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accepts Our Terms and Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <p>------------ OR -------------</p>
            <Button type='submit' className='d-flex align-items-center'>
                <FaGoogle className='me-2'></FaGoogle>
                Continue with Google
            </Button>
            <Button type='submit' className='d-flex align-items-center mt-2'>
                <FaGithub className='me-2'></FaGithub>
                Continue with Github
            </Button>
        </Form>
    );
};

export default Register;