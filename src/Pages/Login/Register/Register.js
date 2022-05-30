import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../../hooks/useToken';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //  user profile update
    // const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user);

    //for navigate from register page to login page
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if (token) {
        navigate('/home');
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // await 
        // createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName: name });
        // alert('Updated profile');
        // navigate('/home');
    }

    return (
        <div className='register-form mt-5 py-5'>
            <h2 style={{ textAlign: 'center' }}>Plese Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='' id='' placeholder='Your Name' />

                <input type="emaill" name='email' id='' placeholder='Email address' required />

                <input type="password" name='password' id='' placeholder='Password' required />
                {/* <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" /> */}
                {/* <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms & condition</label> */}
                <input className='w-50 mx-auto btn btn-dark mt-3' type="submit" value={'Register'} />
            </form>
            <p>Already have an account? <Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={navigateLogin} >Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register; <h2>Plese Register</h2>