import React from 'react';

export const Search = ({handlechange, placeholder}) => (
    <div className="search">
        <input type="search" className="input-box" placeholder={placeholder} onChange={handlechange} />
    </div>
)