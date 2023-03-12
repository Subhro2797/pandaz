import React from 'react';
import Carousols from '../Carousols/Carousols';

const Carousolcontainer = () => {
    return (
        <div className="mt-5">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <Carousols></Carousols>
            </div>
        </div>
    );
};

export default Carousolcontainer;