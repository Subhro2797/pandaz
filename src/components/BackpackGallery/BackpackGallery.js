import React, { useState } from 'react';
import bag1 from '../../images/bags/bag-1.png';
import bag2 from '../../images/bags/bag-2.png';
import bag3 from '../../images/bags/bag-3.png';
import SingleBackpack from '../SingleBackpack/SingleBackpack';

const bagdata = {
    data1: {
        name: 'Safari',
        price: '$50',
        img: `${bag1}`,
        id: '1',
        description: "Carry your backpack with ease owing to the Soft Padded Handle or by sliding it in your luggage trolley with the Smart Sleeve"
    },
    data2: {
        price: '$70',
        name: 'Wildcraft',
        img: `${bag2}`,
        id: '2',
        description: "Engineered for performance, this polyester fabric has high-tenacity durability and is water and dust resistant."

    },
    data3: {
        name: 'Sky Bags',
        price: '$80',
        img: `${bag3}`,
        id: '3',
        description: "A dedicated compartment to keep your Laptop and Tablet organized."

    }

}

const BackpackGallery = () => {
    const [openone, setOpenOne] = useState(false);
    const [opentwo, setOpenTwo] = useState(false);
    const [openthree, setOpenThree] = useState(false);
    return (
        <div className='container my-5'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                <SingleBackpack
                    bagdata={bagdata}
                    img={bag1} name={bagdata.data1.name}
                    boolean={openone}
                    handler={setOpenOne}
                    price={bagdata.data1.price}
                ></SingleBackpack>
                <SingleBackpack
                    bagdata={bagdata}
                    img={bag2}
                    name={bagdata.data2.name}
                    boolean={opentwo}
                    handler={setOpenTwo}
                    price={bagdata.data2.price}
                ></SingleBackpack>
                <SingleBackpack
                    bagdata={bagdata}
                    img={bag3}
                    name={bagdata.data3.name}
                    boolean={openthree}
                    handler={setOpenThree}
                    price={bagdata.data3.price}
                ></SingleBackpack>


            </div>



        </div>
    );
};

export default BackpackGallery;