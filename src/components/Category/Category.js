import React from 'react';

const Category = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="p-3 border bg-primary rounded-3 d-flex align-items-center justify-content-around">
                <h1 className="text-white">{props.product}</h1>
                <img src="/src/images/categories/" alt="" />
            </div>
        </div>
    );
};

export default Category;