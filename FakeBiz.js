import React from 'react';

const fakeBiz = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business() {
    return (
        <div className="Business">
            <img src={fakeBiz.imageSrc} alt={fakeBiz.name} />
            <h2>{fakeBiz.name}</h2>
            <p>{fakeBiz.address}</p>
            <p>{fakeBiz.city}, {fakeBiz.state} {fakeBiz.zipCode}</p>
            <p>{fakeBiz.category}</p>
            <p>Rating: {fakeBiz.rating} stars</p>
            <p>Reviews: {fakeBiz.reviewCount}</p>
        </div>
    );
}

export default Business;