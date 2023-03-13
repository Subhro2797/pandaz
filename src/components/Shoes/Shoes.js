import React from 'react';
import Shoe from '../Shoe/Shoe';
import nike1 from '../../images/shoes/shoe-1.png';
import nike2 from '../../images/shoes/shoe-2.png';
import nike3 from '../../images/shoes/shoe-3.png';

const Shoes = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <Shoe name='Nike Ordem'
                text="The Ordem, released in 2014, is the first Nike football to have panels
                        bonded together, rather than stitched. It is claimed to be rounder and to perform more
                        uniformly regardless of where it is hit, and being almost waterproof."
                price='$420'
                img={nike1}
            ></Shoe>
            <Shoe name='Nike 360'
                text="The shoes feature some sneakerhead favorites including the Safrai
                print, patent leather, mesh upper, and even a crackle print that is reminiscent of the
                Jordan elephant print. "
                price='$699'
                img={nike2}
            ></Shoe>
            <Shoe name='Air Max'
                text="The shoes feature some sneakerhead favorites including the Safrai
                print, patent leather, mesh upper, and even a crackle print that is reminiscent of the
                Jordan elephant print."
                price='$899'
                img={nike3}
            ></Shoe>
        </div>
    );
};

export default Shoes;