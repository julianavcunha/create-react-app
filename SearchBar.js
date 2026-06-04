import React from 'react'
import Button from 'react-bootstrap/Button';

function searchBar() {
    return (
        <div>
            <input type='text' placeholder='Search businesses...' /> 
            <input type='text' placeholder='Where?'/>
            <Button variant="primary" size="lg">
                Let's Go
            </Button>
        </div>
    )
}

export default searchBar;