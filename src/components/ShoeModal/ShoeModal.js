import React, { useContext, useState } from 'react';
import { PropContext } from '../Shoes/Shoes';
import Shoeslider from '../Shoeslider/Shoeslider';
import { OriginalContext } from '../../App';


const ShoeModal = (props) => {
    const { closeModal, handleAddtoCart, product } = props;
    console.log(product);
    const [currentPicture, setCurrentPicture] = useState("bagdata.data1.img");
    const handleClick = (e) => {
        setCurrentPicture(e.target);
    }
    const newshoeshow = useContext(OriginalContext);

    const shoeshow = useContext(PropContext);
    return (
        <div>
            <div className='modal-wrapper mt-5 z-3 position-absolute'>
                <div className='modalContainer'>
                    <div className='d-flex justify-content-end me-3 mt-5'>
                        <button className='btn btn-primary' onClick={() => closeModal(false)}> X </button>
                    </div>
                    <div className='row col-lg-12'>
                        <div className='col-1 d-flex flex-column unique'>
                            <img src={shoeshow.data1.img} className='h-25' alt="" onClick={handleClick} />
                            <img src={shoeshow.data2.img} className='h-25' alt="" onClick={handleClick} />
                            <img src={shoeshow.data3.img} className='h-25' alt="" onClick={handleClick} />
                        </div>
                        <div className='col-6 mb-3 h-sm-25'>
                            <Shoeslider></Shoeslider>
                        </div>
                        <div className='col'>
                            <h2>{shoeshow.data1.name}</h2>
                            <p>{shoeshow.data1.text}</p>
                            <h3>{shoeshow.data1.price}</h3>
                            <hr />
                            <h5>Size</h5>
                            <div className=''>
                                <button className='border border-secondary fw-semibold mx-2'>Small</button>
                                <button className='border border-secondary fw-semibold mx-2'>Medium</button>
                                <button className='border border-secondary fw-semibold mx-2'>Large</button>
                            </div>
                            <button onClick={() => handleAddtoCart(product)} className='btn btn-danger mt-3'>Add to Cart</button>
                            <div className='d-flex align-items-start flex-column'>
                                <h6>Product details</h6>
                                <p>This product is made of different sustainable elements which can be reused in future in regard to keeping the environment clean and hygenic. Our product uses polycarbonate as its primary element</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShoeModal;