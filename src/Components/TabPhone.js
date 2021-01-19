import React from 'react'
import './TabPhone.css'

function TabPhone() {
    return (
        <div className='tabPhone'>
            <h2>yelp clone mobile apps</h2>
            <div className="tabPhoneSplit">
                <div>
                    <h4>
                        iPhone, iPad and Watch
                    </h4>
                    <img src="https://s3-media0.fl.yelpcdn.com/assets/public/pitch_ios.yji-960cce5c1917bdabc568aa735f2d866f.png" alt=""/>
                    
                </div>
                <div>
                    <h4>Android</h4>
                    <img src="https://s3-media0.fl.yelpcdn.com/assets/public/pitch_android.yji-a91a4a087787b1aa9aa729e3de5743d7.png" alt="" srcset=""/>
                </div>
            </div>
        </div>
    )
}

export default TabPhone
