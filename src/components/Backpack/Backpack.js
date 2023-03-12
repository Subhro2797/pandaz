import React from 'react';

const Backpack = (props) => {
    const { name, strength, description, price } = props;
    return (
        <div className="col">
            <div className="card border border-0 shadow-lg h-100">
                <img src="images/bags/bag-1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name} <span className="badge bg-secondary bg-warning">New</span></h5>
                    <p className="card-text">
                        <h6 className="fw-semibold">{strength} </h6>
                        {description}</p>
                </div>
                <div className="m-3">
                    <h4>{price}</h4>
                    <div className="btn btn-warning">Buy Now</div>
                </div>
            </div>
        </div>
    );
};

export default Backpack;