import BackpackGallery from '../BackpackGallery/BackpackGallery';
import Modal from '../Modal/Modal';
import ShoeGallery from '../ShoeGallery/ShoeGallery';
import ShoeModal from '../ShoeModal/ShoeModal';
import Slider from '../Slider/Slider';
import bag1 from '../../images/bags/bag-1.png';
import bag2 from '../../images/bags/bag-2.png';
import bag3 from '../../images/bags/bag-3.png';

import shoe1 from '../../images/shoes/shoe-1.png'
import shoe2 from '../../images/shoes/shoe-2.png'
import shoe3 from '../../images/shoes/shoe-3.png'
import { createContext } from 'react';

const imageData = {
    shoeImages: {
        img1: `${shoe1}`,
        img2: `${shoe2}`,
        img3: `${shoe3}`
    },
    bagImages: {
        img1: `${bag1}`,
        img2: `${bag2}`,
        img3: `${bag3}`
    }
};
export const PropInfo = createContext(imageData);

const Gallery = () => {



    return (
        <PropInfo.Provider>
            <div>
                <ShoeGallery><ShoeModal></ShoeModal></ShoeGallery>
                <BackpackGallery><Modal></Modal></BackpackGallery>
                <div>

                </div>
            </div>
        </PropInfo.Provider>
    );
};

export default Gallery;