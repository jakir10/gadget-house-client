import React from 'react';

const Inventory = ({ inventory }) => {
    const { id, name, img, description, price, quantity, supplierName } = inventory;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <p>Supplier: {supplierName}</p>
            <p>Quantity: {quantity}</p>
            <button>Update Item: {name}</button>
        </div>
    );
};

export default Inventory;