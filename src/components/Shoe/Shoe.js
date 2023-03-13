import React from 'react';

const Shoe = (props) => {
    const { name, text, price, img } = props;
    return (
        <div className='col'>
            <div className="card border border-0 shadow-lg h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{text}</p>
                </div>
                <div className="m-3">
                    <h4>{price}</h4>
                    <div className="btn btn-warning">Buy Now</div>
                </div>
            </div>
        </div>
    );
};

export default Shoe;