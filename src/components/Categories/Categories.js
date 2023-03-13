import React from 'react';
import Category from '../Category/Category';
import watch from '../../images/categories/watch.png';
import shoe from '../../images/categories/shoes.png';
import bag from '../../images/categories/bag.png';

const Categories = () => {
    return (
        <div className='container text-center my-5'>
            <div className="row g-2">
                <Category product='Watch' color='warning' img={watch}></Category>
                <Category product='Shoes' color='danger' img={shoe}></Category>
                <Category product='Bag' color='primary' img={bag}></Category>
            </div>
        </div>
    );
};

export default Categories;