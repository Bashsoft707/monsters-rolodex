import React from 'react';
import { Card } from '../card.component/card.component';

export const CardList = props => (
    <div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
)