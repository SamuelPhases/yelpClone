import React from 'react'
import './ReviewBusiness.css'


import StarIcon from '@material-ui/icons/Star';
import CloseIcon from '@material-ui/icons/Close';

function ReviewBusiness() {
    return (
        <div className='reviewBusinessBox'>
            <div className="pic">
                <img src="https://s3-media0.fl.yelpcdn.com/bphoto/iPNJKlOQ7-eyqa4Yv2r2BA/ls.jpg" alt=""/>
            </div>
            <div className="details">
                <h3>Saigon Sandwich</h3>
                <p>Help the community decide</p>
                <div className="review">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
            </div>
            <div className="remove">
                <CloseIcon/>
            </div>
        </div>
    )
}

export default ReviewBusiness
