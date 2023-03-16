import React from 'react';
import BackpackGallery from '../BackpackGallery/BackpackGallery';
import ShoeGallery from '../ShoeGallery/ShoeGallery';


const Gallery = () => {
    return (
        <div>
            <ShoeGallery></ShoeGallery>
            <BackpackGallery></BackpackGallery>
        </div>
    );
};

export default Gallery;