import React, { useContext, useState } from 'react';
import { PropContext } from '../Shoes/Shoes';
import Singleshoe from '../Singleshoe/Singleshoe';

const ShoeGallery = () => {
    const shoeshow = useContext(PropContext);
    const [openone, setOpenOne] = useState(false);
    const [opentwo, setOpenTwo] = useState(false);
    const [openthree, setOpenThree] = useState(false);
    return (
        <div className='container '>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                <Singleshoe
                    img={shoeshow.data1.img}
                    name={shoeshow.data1.name}
                    price={shoeshow.data1.price}
                    id={shoeshow.data1.id}
                    boolean={openone}
                    handler={setOpenOne}
                    wholeproduct={shoeshow}></Singleshoe>

                <Singleshoe
                    img={shoeshow.data2.img}
                    name={shoeshow.data2.name}
                    price={shoeshow.data2.price}
                    id={shoeshow.data2.id}
                    boolean={opentwo}
                    handler={setOpenTwo}></Singleshoe>
                <Singleshoe
                    img={shoeshow.data3.img}
                    name={shoeshow.data3.name}
                    price={shoeshow.data3.price}
                    id={shoeshow.data3.id}
                    boolean={openthree}
                    handler={setOpenThree}></Singleshoe>
            </div>

        </div>
    );
};

export default ShoeGallery;