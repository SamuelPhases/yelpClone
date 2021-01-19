import React from 'react'
import './RestaurantRow.css'

import StarIcon from '@material-ui/icons/Star';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import EcoIcon from '@material-ui/icons/Eco';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

function RestaurantRow() {
    return (
        <div className='restaurantRow'>
            <div className="slide">

            </div>
            <div className="content">
                <div className="content-header">
                    <h3>American Food  kitchen</h3>
                    <div className="address">
                        <p>(234) 497-1102</p>
                        <p>2089 Clean St</p>
                        <p>parkside</p>
                    </div>
                </div>
                <div className="content-rating">
                    <div className="rating">
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                    <p className="review">589</p>
                </div>
                <div className="fee-type">
                    <p>$$$</p>
                    &middot;
                    <p>American, Food Delivery Services</p>
                </div>
                <div className="dur">
                    <WhatshotIcon/>
                    <p>Opened 10 weeks ago</p>
                </div>
                <div className="selections">
                    <p className="grocery">Grocery</p>
                    <div className="veg">
                        <EcoIcon/>
                        <p>Vegetarian friendly
                        </p>
                        <InfoOutlinedIcon />
                    </div>
                    <div className="grab">
                        <FastfoodIcon/>
                        <p>Grab-and-go</p>
                    </div>
                    <div className="del-takeout">
                        <div className="del">
                            <CheckRoundedIcon />
                            <p>delivery</p>
                        </div>
                        <div className="del">
                            <CheckRoundedIcon />
                            <p>takeout</p>
                        </div>
                    </div>
                </div>
                <div className="best-review">
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque quasi voluptas quos repellendus perferendis corporis soluta sequi, sed vel! Consequuntur quam blanditiis necessitatibus explicabo..."<span>more</span>
                    </p>
                </div>
                <div className="cta">
                    <button>Start Order</button>
                    <p>Offers takeout and delivery</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantRow
