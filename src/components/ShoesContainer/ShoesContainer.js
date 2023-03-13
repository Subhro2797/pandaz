import React from 'react';
import Shoes from '../Shoes/Shoes';
import './ShoesContainer.css';

const ShoesContainer = () => {
    return (
        <div className='container my-5' id="shoes">
            <h2 className='shoe-head'>Shoes Collection</h2>
            <Shoes></Shoes>
        </div>
    );
};

export default ShoesContainer;