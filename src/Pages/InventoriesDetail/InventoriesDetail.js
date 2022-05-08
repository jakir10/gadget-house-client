import React from 'react';
import { useParams } from 'react-router-dom';

const InventoriesDetail = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h2>Inventories Details: {inventoryId}</h2>
        </div>
    );
};

export default InventoriesDetail;