import './Register.css'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [error, setError] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const showToastMessage = () => {
        toast.success('Please verify your email !', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    const { providerLogin, createUser, emailVerification, updateUserInfo } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(name, photoURL)

        if (!/(?=.*[a-z])/.test(password)) {
            setError('Please provide at least 1 lowercase letter')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please provide at least 1 uppercase letter')
            return
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setError('Please provide at least 1 number')
            return
        }
        if (!/(?=.*[!@#$&*%])/.test(password)) {
            setError('Please provide at least 1 special charecter')
            return
        }
        if (!/.{8}/.test(password)) {
            setError('Password length must be at least 8 charecters')
            return
        }
        if (password !== confirmPassword) {
            setError('Password did not match')
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleUpdateUserInfo(name, photoURL)
                handleEmailVerification()
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleUpdateUserInfo = (name, photoURL) => {
        const info = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserInfo(info)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleTerms = event => {
        setTermsAccepted(event.target.checked)
    }

    return (
        <div className='container'>

            <Form onSubmit={handleSubmit} className='w-md-50 mt-3 mb-3 p-2'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your full name" />
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

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirmPassword' placeholder="Re-type Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleTerms}
                        label={<>Accepts Our <Link to='/terms'> Terms and Conditions</Link></>} />
                </Form.Group>
                <ToastContainer autoClose={3000} />
                <Form.Group className='d-flex flex-column'>
                    <Form.Text className='text-danger mt-2 mb-2'>
                        {error} {/* show error in UI */}
                    </Form.Text>
                    <Button onClick={showToastMessage} variant="primary" type="submit" className='mb-2 w-25' disabled={!termsAccepted}>
                        Register
                    </Button>
                </Form.Group>
                <div className='mt-2'>
                    <small>
                        Already Have An Account? Login
                    </small>
                    <Link to='/login'> here!!</Link>
                </div>
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