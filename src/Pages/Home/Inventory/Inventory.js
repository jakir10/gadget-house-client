import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { id, name, img, description, price, quantity, supplierName } = inventory;
    //    for navigation
    const navigate = useNavigate();
    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <p>Supplier: {supplierName}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => navigateToInventoryDetail(id)} className='btn btn-dark'>Update Item: {name}</button>
        </div>
    );
};

export default Inventory;