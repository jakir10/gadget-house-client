import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';
import "./Inventories.css";

const Inventories = () => {
    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate();




    return (
        // Inventory section
        <div id='inventories' className='container mt-3'>
            <div className='row'>
                <h1 className='text-primary text-center mt-5 my-3'>Manage Inventories</h1>
                <div className='inventories-container'>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        >
                        </Inventory>)
                    }
                </div>
                <button onClick={() => navigate('/manageitem')} className='btn-inventories w-25 mx-auto mt-5'>See All Inventories</button>
            </div>
        </div>
    );
};

export default Inventories;