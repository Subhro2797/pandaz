import React, { useContext } from 'react';
import { PropContext } from '../Shoes/Shoes';

const ShoeGallery = () => {
    const shoeshow = useContext(PropContext);
    return (
        <div className='container '>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                <div className='col'>
                    <div className="card border border-0 shadow-lg h-100" id='product-details' >
                        <img src={shoeshow.data1.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-1">{shoeshow.data1.name}</h5>
                        </div>
                        <div className="m-3">
                            <h4>{shoeshow.data1.price}</h4>
                            <div className="btn btn-warning" >
                                Quick View
                            </div>


                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card border border-0 shadow-lg h-100" id='product-details' >
                        <img src={shoeshow.data2.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-1">{shoeshow.data2.name}</h5>
                        </div>
                        <div className="m-3">
                            <h4>{shoeshow.data2.price}</h4>
                            <div className="btn btn-warning" >
                                Quick View
                            </div>


                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card border border-0 shadow-lg h-100" id='product-details' >
                        <img src={shoeshow.data3.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-1">{shoeshow.data3.name}</h5>
                        </div>
                        <div className="m-3">
                            <h4>{shoeshow.data3.price}</h4>
                            <div className="btn btn-warning" >
                                Quick View
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShoeGallery;