import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Register = () => {
    const { providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Form className='w-50 mt-5 mb-3'>
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
                <Button variant="primary" type="submit" className='mb-2'>
                    Register
                </Button>
            </Form>

            <div className='mb-3'>
                <p>------------ OR -------------</p>
                <Button onClick={handleGoogleSignIn} type='submit' className='d-flex align-items-center'>
                    <FaGoogle className='me-2'></FaGoogle>
                    Continue with Google
                </Button>
                <Button onClick={handleGithubSignIn} type='submit' className='d-flex align-items-center mt-2'>
                    <FaGithub className='me-2'></FaGithub>
                    Continue with Github
                </Button>
            </div>
        </div>
    );
};

export default Register;