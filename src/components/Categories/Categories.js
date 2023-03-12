import React from 'react';
import Category from '../Category/Category';

const Categories = () => {
    return (
        <div className='container text-center my-5'>
            <div className="row g-2">
                <Category product='Watch' color='warning'></Category>
                <Category product='Shoes' color='danger'></Category>
                <Category product='Bag' color='primary'></Category>
            </div>
        </div>
    );
};

export default Categories;