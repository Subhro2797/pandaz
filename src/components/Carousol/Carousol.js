import React from 'react';

const Carousol = (props) => {
    const { name, description, price, img } = props;
    return (
        <div>
            <div className="carousel-item active bg-info border rounded p-5 ">
                <div className="row">
                    <div className="col-lg-7 d-flex align-items-center justify-content-start">
                        <div>
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <h1>{price}</h1>
                            <div className="btn btn-danger">Buy now</div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img src={img} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousol;