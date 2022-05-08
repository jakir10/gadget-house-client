import React from 'react';
import notfound from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-danger mt-5'>Page not Found</h2>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;