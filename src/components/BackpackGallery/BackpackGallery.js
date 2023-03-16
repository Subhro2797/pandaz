import React from 'react';
import Backpack from '../Backpack/Backpack';
import bag1 from '../../images/bags/bag-1.png';
import bag2 from '../../images/bags/bag-2.png';
import bag3 from '../../images/bags/bag-3.png';

const bagdata = {
    data1: {
        name: 'Safar',
        price: '$50',
        img: `${bag1}`,
        id: '1'
    },
    data2: {
        price: '$70',
        name: 'Wildcraft',
        img: `${bag2}`,
        id: '2'

    },
    data3: {
        name: 'Sky Bags',
        price: '$80',
        img: `${bag3}`,
        id: '3'

    }

}

const BackpackGallery = () => {
    return (
        <div className='container my-5'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                <div className="col">
                    <div className="card border border-0 shadow-lg h-100">
                        <img src={bagdata.data1.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{bagdata.data1.name} <span className="badge bg-secondary bg-warning">New</span></h5>

                        </div>
                        <div className="m-3">
                            <h4>{bagdata.data1.price}</h4>
                            <div className="btn btn-warning">Quick View</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-0 shadow-lg h-100">
                        <img src={bagdata.data2.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{bagdata.data2.name} <span className="badge bg-secondary bg-warning">New</span></h5>

                        </div>
                        <div className="m-3">
                            <h4>{bagdata.data1.price}</h4>
                            <div className="btn btn-warning">Quick View</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-0 shadow-lg h-100">
                        <img src={bagdata.data3.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{bagdata.data3.name} <span className="badge bg-secondary bg-warning">New</span></h5>

                        </div>
                        <div className="m-3">
                            <h4>{bagdata.data3.price}</h4>
                            <div className="btn btn-warning">Quick View</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackpackGallery;