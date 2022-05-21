import React from 'react';
import useInventories from '../hooks/useInventories';
import Inventory from '../Pages/Home/Inventory/Inventory';
import './ManageInventories.css';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();
    return (
        <div>
            <h2>All Inventories</h2>
            <div className="inventory-container">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    >
                    </Inventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;