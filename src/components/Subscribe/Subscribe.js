import React from 'react';
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center bg-info rounded-3' id='subscribe'>
            <div className="my-5 ">
                <h2>LET'S STAY IN TOUCH</h2>
                <p>Get Updates on sales, Specials and Discounts</p>
                <form>
                    <div className="mb-3">

                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" className="form-check-input " id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;