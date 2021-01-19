import React from 'react'
import './NavBox.css'
// M

function NavBox() {
    return (
        <div className='navBox'>
            <div className="navBox-container">

                <h2>Find the Best Businesses in Town </h2>
                <div className="navBox-grid">
                    <div>
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/public/massage.yji-dc800fc2cf62dc8e9fe14560a1fc3ed4.jpg" alt=""/>
                        <h4>massage</h4>
                    </div>
                    <div>
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/public/hotels.yji-f2b11c811eb65ef5c11a96dcc5a1f889.jpg" alt="" srcset="" />
                        <h4>hotels</h4>
                    </div>
                    <div>
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/public/hotels.yji-f2b11c811eb65ef5c11a96dcc5a1f889.jpg" alt="" srcset="" />
                        <h4>restaurants</h4>
                    </div>
                    <div><img src="https://s3-media0.fl.yelpcdn.com/assets/public/movers.yji-cbf48ef1f4b2287fa8f36f75cd3c2572.jpg" alt="" srcset="" />
                        <h4>movers</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBox
