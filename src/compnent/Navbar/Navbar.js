import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <a href="">Logo</a>
                    </div>
                    <input type="checkbox" id='nav-check' />
                    <label htmlFor="nav-check" className='nav-toggler'>
                        <span>Menu</span>
                    </label>
                    <div className="nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li className='k'><a href="#">Contact +
                            
                            <ul  className='drop ja'>
                                <li><a href="#">Me</a></li>
                                <li><a href="#">Riyad</a></li>
                                <li  className='k'><a href="#">Keya + 
                                <ul className='drop jak' id='keya'>
                                <li><a href="#">Phone</a></li>
                                <li><a href="#">Mobile</a></li>
                                
                            </ul></a></li>
                            </ul>
                            </a>
                            </li>
                            <li><a href="#">Products</a></li>
                            <li  className='kl'><a href="#">Services + 
                            <ul className='drop v'>
                                <li><a href="#">Visa</a></li>
                                <li><a href="#">Home</a></li>
                                
                            </ul>
                            </a>
                            </li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;