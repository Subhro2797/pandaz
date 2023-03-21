import React from 'react';
import Modal from '../Modal/Modal';

const SingleBackpack = (props) => {
    return (
        <div className='col'>

            <div className="card border border-0 shadow-lg h-100">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-1">{props.name}</h5>

                </div>
                <div className="m-3">
                    <h4>{props.price}</h4>
                    <div className="btn btn-warning" onClick={() => props.handler(true)}>Quick View</div>
                    {
                        (props.boolean) && <Modal bagdata={props.bagdata} img={props.img} closeModal={props.handler}></Modal>
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleBackpack;