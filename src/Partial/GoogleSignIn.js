import React from 'react'
import './GoogleSignIn.css'

import CloseRoundedIcon from  '@material-ui/icons/CloseRounded'


function GoogleSignIn() {
    return (
        <div className='googleSignIn-container' >
            <div className="googleSignIn">
                <div className="googleSignIn-header">
                    <h3>Sign in to yelpclone.com with Google</h3>
                    <div className="googleSignIn-close">
                        <CloseRoundedIcon/>
                    </div>
                </div>
                <div className="googleSignIn-btn">
                    <button>Click to login</button>
                </div>
                <div className="googleSignIn-footer">
                    <h5>To create your account, Google will share your name, email address, and profile picture with yelpclone.com.</h5>
                </div>
            </div>
        </div>
    )
}

export default GoogleSignIn
