import React from 'react'
import './NewNavBox.css'

import SearchIcon from '@material-ui/icons/Search'
import StarIcon from '@material-ui/icons/Star'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WhatshotIcon from '@material-ui/icons/Whatshot';

function NewNavBox() {
    return (
        <div className="newNavBox-container">
            <div className='newNavBox'>
                <h2>Yelp Clone London</h2>
                <ul className="newNavBox-row">
                    <li>New York</li>
                    <li>London</li>
                    <li>meyerside</li>
                    <li>manchester</li>
                    <li><SearchIcon  className='newNavBox-search' />  more cities</li>
                </ul>
                <h3>hot & new businesses</h3>
                <div className="newNavBox-grid">
                    <div>
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/vAEPXSjpRCrD7SDrKg3UzA/l.jpg" alt="" />
                        <div className="newNavBox-text">
                            <h2>mark 'n mike's</h2>
                            <div className="newNavBox-reviews">
                                <div className="rating">
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarBorderIcon/>
                                </div>
                                <p>20 reviews</p>
                            </div>
                            {/* food */}
                            <h4>Delis</h4>
                            {/* location */}
                            <h4>Financial District, Soma </h4>
                            <div>

                                <WhatshotIcon className='hot' />
                                <h4>Opened 6 weeks ago</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/7fgllQ3WlqyVbwsPPGUcpQ/l.jpg" alt="" />
                        <div className="newNavBox-text">
                            <h2>soma garden</h2>
                            <div className="newNavBox-reviews">
                                <div className="rating">
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarBorderIcon/>
                                </div>
                                <p>20 reviews</p>
                            </div>
                            {/* food */}
                            <h4>Pop-Up restaurants, bars</h4>
                            {/* location */}
                            <h4>Financial District, Soma </h4>
                            <div>
                                <WhatshotIcon className='hot' />
                                <h4>Opened 7 weeks ago</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/vAEPXSjpRCrD7SDrKg3UzA/l.jpg" alt="" />
                        <div className="newNavBox-text">
                            <h2>mark 'n mike's</h2>
                            <div className="newNavBox-reviews">
                                <div className="rating">
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon />
                                    <StarBorderIcon/>
                                    <StarBorderIcon/>
                                </div>
                                <p>20 reviews</p>
                            </div>
                            {/* food */}
                            <h4>Delis</h4>
                            {/* location */}
                            <h4>Financial District, Soma </h4>
                            <div>
                                <WhatshotIcon className='hot'/>
                                <h4>Opened 6 weeks ago</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>See more hot and new businesses </h5>
            </div>
        </div>
    )
}

export default NewNavBox
