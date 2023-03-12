import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <div className='header container'>
            <nav className="navbar navbar-expand-lg fixed-top bg-light">
                <div className="container">
                    <a className="navbar-brand" href=" ">
                        <img src={logo} alt="Bootstrap" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/home' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Shoes' className="nav-link">Shoes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Backpack' className="nav-link">Backpack</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Subscribe' className="nav-link">Subscribe</Link>
                            </li>


                        </ul>
                        <form class="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )

};

export default Header;

