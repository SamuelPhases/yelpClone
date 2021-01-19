import React from 'react'
import './Header.css'

import RedeemIcon from '@material-ui/icons/Redeem';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';

function Header() {
    return (
        <div className='header'>
            <img src="https://images.unsplash.com/photo-1522906456132-bac22adad34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className='header--img' />
            <div className="header--contentContainer">
                <div className="header--notificationContainer">
                    <div className="header--notification">
                        <div className="header--notificationLeft">
                            <RedeemIcon />
                            <h3>You can always order in</h3>
                        </div>
                        <ul className="header--notificationRight">
                            <li>delivery</li>
                            <li>pizza delivery</li>
                            <li>chinese food delivery</li>
                            <CloseIcon  className="header--notification-close" />
                        </ul>
                    </div>
                </div>
                <nav className="header--notificationNav">
                    <ul>
                        <li>Write a Review</li>
                        <li>Events</li>
                        <li>Talk</li>
                    </ul>
                    <ul>
                        <button>Log In</button>
                        <button>Sign Up</button>
                    </ul>
                </nav>
                <div className="header--searchContainer">
                    <form action="">
                        <div>
                            <label htmlFor="find">Find</label>
                            <input type="text" name="find" id="find" placeholder='plumbers, delivery, takeout...' />
                        </div>
                        <div>
                            <label htmlFor="near">Near</label>
                            <input type="text" name="near" id="near" placeholder='Lagos, Nigeria' />
                        </div>
                        <button type="submit"><SearchIcon/></button>
                    </form>
                    <ul>
                        <li><RestaurantIcon className='header--searchIconTab' /> restaurants</li>
                        <li><HomeWorkIcon   className='header--searchIconTab' /> home services </li>
                        <li><MotorcycleIcon className='header--searchIconTab' /> delivery</li>
                    </ul>
                </div>

                <div className="header--photoCredit">
                    <h3 className="header--photoCreditPlace">
                        ipsulore
                    </h3>
                    <p>Photo by <strong>naipsulo k.</strong> </p>
                </div>
            </div>
            <div className="header--overlay"></div>
        </div>
    )
}

export default Header
