import React from 'react'
import Business from './fakeBiz.js'
import ListGroup from 'react-bootstrap/ListGroup';

function businessList() {
    return (
        <ListGroup>
            <ListGroup.Item><Business /></ListGroup.Item>
        </ListGroup>
    );
}

export default businessList;