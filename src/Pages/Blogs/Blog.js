import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
            <h2 className='text-center text-primary mt-5'>My Blog</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        avaScript is a high-level, lightweight (easy syntax) and object-oriented programming language that is used by almost every web developer to create web pages, web applications, mobile applications and is also used in game development. Node.js is a JavaScript runtime environment built on google’s v8 engine which is used to run JavaScript outside the browser and to put it simply it is just an extension of a JavaScript library with many modules hence making JavaScript even more powerful.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. When should you use nodejs and when should you use mongodb</Accordion.Header>
                    <Accordion.Body>
                        NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.he summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.Suppose you are building a website and you need a database to store the data or information so here you can use MongoDB but to be connected with MongoDB you need a connector, so here you can use NodeJS which will help your website to run outside of server.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. What is the purpose of jwt and how does it work</Accordion.Header>
                    <Accordion.Body>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. <br />
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>

    );
};

export default Blog;