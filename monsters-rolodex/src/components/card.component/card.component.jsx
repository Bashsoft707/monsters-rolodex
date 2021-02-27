import React from 'react';

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
        <h2>{props.monster.name}</h2>
        <h2>{props.monster.email}</h2>
    </div>
)