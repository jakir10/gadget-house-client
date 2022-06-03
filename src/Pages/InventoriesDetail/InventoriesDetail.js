import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const InventoriesDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    const navigate = useNavigate();



    useEffect(() => {
        const url = `https://https://pacific-falls-91567.herokuapp.com/inventory/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])


    return (
        <div className='container'>
            <h2>Inventories Details: {inventoryId}</h2>
            <div className=''>
                <div>

                </div>
                <div><button onClick={() => navigate('/manageitem')} className='btn-inventories w-25 mx-auto mt-5'>See All Inventories</button></div>
            </div>


        </div>
    );
};

export default InventoriesDetail;