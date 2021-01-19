import React from 'react'


import RedeemIcon from '@material-ui/icons/Redeem';
import CloseIcon from '@material-ui/icons/Close';

function InfoHeader({setInfoHeaderPopup}) {
    return (
        <div className="header--notificationContainer">
            <div className="header--notification">
                <div className="header--notificationLeft">
                    <RedeemIcon />
                    <h3>You can always order in</h3>
                </div>
                <ul className="header--notificationRight">
                    <li>delivery</li>
                    <li>pizza delivery</li>
                    <li>chinese food delivery</li>
                    <CloseIcon  className="header--notification-close" onClick={()=>setInfoHeaderPopup(false)} />
                </ul>
            </div>
        </div>
    )
}

export default InfoHeader
