import { useContext } from 'react';
import { PropContext } from '../Shoes/Shoes';

const Productdetail = () => {
    const shoedata = useContext(PropContext);
    return (
        <div>
            <h1>Product Detail</h1>
            <div className='row container-fluid'>
                <div className='col-7 border col-lg-7 col-md-12 col-sm-12'>
                    <img src={shoedata.data2.img} alt="" className='w-100' />
                    <div className="accordion" id="accordionExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Description
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>{shoedata.data2.text}</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Details
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-5 border col-md-12 col-lg-5 col-sm-12'>
                    <h2 className='fs-1'>Nike Ordem</h2>
                    <p className='text-primary fs-1 fw-bold'>{shoedata.data2.price}</p>
                    <p>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            What's new!
                        </button>
                    </p>
                    <div>
                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                            <div className="card card-body">
                                <p>The black Edition will be available soon.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header btn-warning" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Select your Size
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExampl">
                                <div className="accordion-body fs-2 ">
                                    <div className="form-check border border-success mb-2">
                                        <input className="form-check-input" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            M
                                        </label>
                                    </div>
                                    <div className="form-check border border-success mb-2">
                                        <input className="form-check-input" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            L
                                        </label>
                                    </div>
                                    <div className="form-check border border-success mb-2">
                                        <input className="form-check-input" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            XL
                                        </label>
                                    </div>
                                    <div className="form-check border border-success mb-2">
                                        <input className="form-check-input" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            XXL
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <button type="button" className="btn btn-outline-secondary mt-5 btn-lg col-sm-12 col-md-8">ADD TO BAG</button>

                </div>
            </div>
        </div>
    );
};

export default Productdetail;