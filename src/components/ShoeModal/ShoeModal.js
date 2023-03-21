import React, { useContext } from 'react';
import { PropContext } from '../Shoes/Shoes';

const ShoeModal = (props) => {
    const { closeModal } = props;
    const shoeshow = useContext(PropContext);
    return (
        <div>
            <div className='modal-wrapper mt-5 z-3 position-absolute'>
                <div className='modalContainer'>
                    <div className='d-flex justify-content-end me-3 mt-5'>
                        <button className='btn btn-primary' onClick={() => closeModal(false)}> X </button>
                    </div>
                    <div className='row col-lg-12'>
                        <div className='col-6 mb-3 h-sm-25'>
                            <img src={shoeshow.data1.img} className='d-block w-100 ' alt="" />
                        </div>
                        <div className='col-6 '>
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
                            <button className='btn btn-danger mt-3'>Add to Bag</button>
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