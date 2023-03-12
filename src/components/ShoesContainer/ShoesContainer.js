import React from 'react';
import Shoes from '../Shoes/Shoes';

const ShoesContainer = () => {
    return (
        <div className='container my-5' id="shoes">
            <h2>Shoes Collection</h2>
            <Shoes></Shoes>
        </div>
    );
};

export default ShoesContainer;