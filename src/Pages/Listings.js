import React from 'react'
import PartialHeader from '../PageContent/PartialHeader'
import './Listings.css'

function Listings() {
    return (
        <div className='listingsContainer'>
            <div className="listings">
                <PartialHeader />
                <div className="contentListing">
                    <div className="textListing">
                        <h2>Grow your business with yelpclone</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eligendi incidunt, aut nihil culpa iusto, deleniti voluptate consectetur, placeat iure id ducimus beatae recusandae dolor explicabo expedita laudantium dolorem at!</p>
                        <button>manage my free listing</button>
                    </div>
                    <div className="imgBoxListing"></div>
                </div>
                
            </div>
        </div>
    )
}

export default Listings
