import React from 'react'
import './BusinessContent.css'

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import RestaurantRow from './RestaurantRow';

function BusinessContent() {
    return (
        <div className='businessContentContainer'>
            <div className="businessContent">
                <div className="businessContent-flex">
                    <p>London</p>
                    <ChevronRightIcon/>
                    <p>Restaurants</p>
                </div>
                <div className="businessContent-header">
                    <h2>The Best 10 Restaurants in London, UK</h2>
                    <p>sort:
                        <span> recommended
                        </span>
                            <ExpandMoreIcon />
                        
                     </p>
                </div>
                <div className="delivery-takeout">
                    <div className="delivery">
                            <div className="txt">
                                <h3>delivery</h3>
                                <p>Order in</p>
                        </div>
                        <div className="pic-block"></div>
                    </div>  
                    <div className="delivery">
                            <div className="txt">
                                <h3>Takeout</h3>
                                <p>Grab and go</p>
                        </div>
                        <div className="pic-block"></div>
                    </div>  
                </div>
                <h3 className="sponsored">sponsored results <InfoOutlinedIcon /> </h3>
                <div className="res-grid">
                    <RestaurantRow/>
                    <RestaurantRow/>
                </div>
                <h3 className="all sponsored">all results <InfoOutlinedIcon /> </h3>
                <div className="res-grid">
                    <RestaurantRow/>
                    <RestaurantRow/>
                    <RestaurantRow/>
                    <RestaurantRow/>
                    <RestaurantRow/>
                    <RestaurantRow/>
                    <RestaurantRow/>
                    <RestaurantRow/>
                </div>
            </div>
        </div>
    )
}

export default BusinessContent
