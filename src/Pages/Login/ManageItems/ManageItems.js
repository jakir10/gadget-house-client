import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import './ManageItems.css'

const ManageItems = () => {
    const [inventories, setInventories] = useInventories();
    const handleDelete = id => {
        const proceed = window.confirm('Confirm Delete');
        if (proceed) {
            const url = `https://pacific-falls-91567.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining);
                })
        }
    }

    const navigate = useNavigate();

    return (
        <div className='container w-50 mx-auto mt-5 '>
            <h2>Manage All Items</h2>
            <button onClick={() => navigate('/additem')} className='btn btn-primary my-3' >Add New item</button>
            <div className='row gy-3'>
                {
                    inventories.map(inventory => <div key={inventory._id}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={inventory.img} />
                            <Card.Body>
                                <Card.Title>{inventory.name}</Card.Title>
                                {/* <img className='w-100' src={inventory.img} alt="" /> */}
                                <p>price: {inventory.price}</p>
                                <p>Quantity: {inventory.quantity}</p>
                                <p>supplier: {inventory.supplierName}</p>
                                <Button className='btn btn-danger' onClick={() => handleDelete(inventory._id)} variant="primary">Remove</Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ManageItems;