import React from 'react';

const Card = ({name, institute, address, phone}) => {
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{institute}</p>
            <p>{address}</p>
            <p>{phone}</p>
        </div>
    )
}

export default Card;