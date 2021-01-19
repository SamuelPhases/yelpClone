import React from 'react'
import BusinessHeader from '../PageContent/BusinessHeader'
import './Review.css'

import SearchIcon from '@material-ui/icons/Search';
import ReviewBusiness from '../PageContent/ReviewBusiness';
import Footer from '../Components/Footer';

function Review() {
    return (
        <div className='reviewContainer'>
            <div className="review">
                <BusinessHeader />
                <div className="reviewHeader">
                    <div className="content">
                        <div className="txt">
                            <h1>your first review awaits</h1>
                            <p>
                            Review your favorite businesses and share your experiences with our community. Need a little help getting started? <span> Check out these tips.</span>
                            </p>
                            <form action="">
                                <div>
                                    <input type="text" name="find" id="find" />
                                    <label htmlFor="find">find</label>
                                </div>
                                <div>
                                    <input type="text" name="location" id="location" />
                                    <label htmlFor="location">Location
                                    </label>
                                </div>
                                <button type="submit">
                                    <SearchIcon/>
                                </button>
                            </form>
                        </div>
                        <div className="imgBox">
                            <img src="https://s3-media0.fl.yelpcdn.com/assets/public/house.yji-3a7a5118019b5595e07260371495f205.png" alt=""/>
                        </div>
                    </div>
                    <div className="businessReviewContainer">
                        <div className="businessReview">
                            <h2>Been to these businesses recently?</h2>
                            <div className="grid">
                                <ReviewBusiness/>
                                <ReviewBusiness/>
                                <ReviewBusiness/>
                                <ReviewBusiness/>
                                <ReviewBusiness/>
                                <ReviewBusiness/>
                                <ReviewBusiness/>
                                <ReviewBusiness/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Review
