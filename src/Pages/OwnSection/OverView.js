import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const OverView = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5 my-3'>Overview</h2>
            <CardGroup className='container gap-5'>
                <Card className='text-center bg-primary'>
                    <Card.Body className='text-white'>
                        <Card.Title>10+</Card.Title>
                        <Card.Text>
                            different items in our warehouse.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='text-center bg-primary'>
                    <Card.Body className='text-white'>
                        <Card.Title>7</Card.Title>
                        <Card.Text>
                            Committed supplier we have.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='text-center bg-primary'>
                    <Card.Body className='text-white'>
                        <Card.Title>100+</Card.Title>
                        <Card.Text>
                            Total items stored in our warehouse.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    );
};

export default OverView;