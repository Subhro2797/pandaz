import React from 'react';
import ShoeModal from '../ShoeModal/ShoeModal';


const Singleshoe = (props) => {
    return (
        <div>
            <div className='col'>
                <div className="card border border-0 shadow-lg h-100" id='product-details' >
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fs-1">{props.name}</h5>
                    </div>
                    <div className="m-3">
                        <h4>{props.price}</h4>
                        <button className='btn btn-warning' onClick={() => props.handler(true)}> Quick View</button>
                        {
                            (props.boolean) && <ShoeModal closeModal={props.handler}></ShoeModal>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singleshoe;