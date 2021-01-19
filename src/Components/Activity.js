import React from 'react'
import './Activity.css'

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import StarRateIcon from '@material-ui/icons/StarRate';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';


function Activity() {
    return (
        <div className="activityContainer">
            <div className="content">
                <div className="dp">
                    <img src="" alt="" />
                </div>
                <div className="content-details">
                    <h3>lorem p.</h3>
                    <p>Wrote a review</p>
                </div>
            </div>
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/yb_SCxOUqmWctL4Jv50KWA/l.jpg" alt="" className="img-content" />
            <div className="content">
                <h3>Lorem Restaurant</h3>
                <div className="rating-text">
                    <div className="rating">
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                        <StarRateIcon/>
                    </div>
                    <div className="trunc-text">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa deleniti quam maiores, non harum quos excepturi tempore est pariatur, similique quaerat veniam necessitatibus molestias laboriosam natus esse velit officiis nam!... <span>Continue reading</span>
                        </p>
                    </div>
                </div>
                <div className="icon-group">
                    <div>
                        <EmojiEmotionsIcon/>
                        <p>1</p>
                    </div>
                    <div>
                        <EmojiObjectsIcon/>
                        <p>1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity
