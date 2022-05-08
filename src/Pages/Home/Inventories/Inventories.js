import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import "./Inventories.css";

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])


    return (
        // Inventory section
        <div id='inventories' className='container mt-3'>
            <div className='row'>
                <h1 className='text-primary text-center mt-5 my-3'>Manage Inventories</h1>
                <div className='inventories-container'>
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        >
                        </Inventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventories;