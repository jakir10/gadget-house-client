import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const TopSupplier = () => {
    return (
        <div>
            <h2 className='text-primary text-center mt-5 my-3'>Top Suppliers</h2>
            <p className='text-center mb-5'>These are oure top Suppliers how have supply products to our warehouse</p>
            <CardGroup className='container gap-5'>
                <Card className='text-center bg-dark'>
                    <Card.Body className='text-white'>
                        <Card.Title>Jakir</Card.Title>
                        <Card.Text>
                            Jakir supplies 5 different  items to our warehouse.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='text-center bg-dark'>
                    <Card.Body className='text-white'>
                        <Card.Title>Utsob</Card.Title>
                        <Card.Text>
                            He have 4 brands item to store in our warehouse.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='text-center bg-dark'>
                    <Card.Body className='text-white'>
                        <Card.Title>Tanvir</Card.Title>
                        <Card.Text>
                            He have more then 7 items to store in our warehouse.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default TopSupplier;