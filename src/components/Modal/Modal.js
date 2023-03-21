import React from 'react';
import '../../index.css';


const Modal = (props) => {
    const { closeModal, bagdata } = props;
    return (
        <div className='modal-background z-3 position-absolute'>
            <div className='modal-wrapper mt-5'>
                <div className='modalContainer'>
                    <div className='d-flex justify-content-end me-3'>
                        <button className='btn btn-primary' onClick={() => closeModal(false)}> X </button>
                    </div>
                    <div className='row col-lg-12'>
                        <div className='col-6 mb-3 h-sm-25'>
                            <img src={bagdata.data1.img} className='d-block w-100 ' alt="" />
                        </div>
                        <div className='col-6 '>
                            <h2>{bagdata.data1.name}</h2>
                            <p>{bagdata.data1.description}</p>
                            <h3>{bagdata.data1.price}</h3>
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

export default Modal;