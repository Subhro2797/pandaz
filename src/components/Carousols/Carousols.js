import React from 'react';
import Carousol from '../Carousol/Carousol';



const Carousols = () => {
    return (
        <div className='carousel-inner'>
            <Carousol name='Cool Headphones'
                description="Here you can get exclusive headphones with a superb price range. We sell
                                headphones
                                of different international brands"
                price='$420'
            ></Carousol>
            <Carousol name='Smart TV'
                description='Here you can get exclusive smart televisons with a superb price range and in
                different size. We sell televsions from multiple brands in the world in our
                retail store
                of different international brands'
                price='$700'
            ></Carousol>
            <Carousol name='X-Box'
                description='Here you can get gaming X-boxes in a superb price range. We have exclusive
                partnership with Microsoft.The products are certified and authentic as well.'
                price='$499'
            ></Carousol>
        </div>
    );
};

export default Carousols;