import React from 'react';
import Backpacks from '../Backpacks/Backpacks';
import './BackpackCollection.css';

const BackpackCollection = () => {
    return (
        <div className="container my-5" id="backpack">
            <h2 className='backpack-head'>Backpack Collection</h2>
            <Backpacks></Backpacks>
        </div>
    );
};

export default BackpackCollection;