import React from 'react';
import google from '../../../images/social/google.png';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }
    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '40px' }} src={google} alt="" />
                    <span className='px-2'>Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;