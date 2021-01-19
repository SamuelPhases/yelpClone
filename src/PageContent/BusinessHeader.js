import React from 'react'
import './BusinessHeader.css'

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function BusinessHeader() {
    return (
        <div className='businessHeaderContainer'>
            <div className="businessHeader">
                <div className="logo"></div>
                <div className="searchBlock">
                    <form action="">
                        <input type="text" name='foodType' id='' placeholder='tacos, cheap dinner' />
                        <div className="line"></div>
                        <input type="text" name='location' id='' placeholder='address, neighbourhood, city, state' />
                        <button type="submit"><SearchIcon/></button>
                    </form>
                    <ul>
                        <li>Restaurants <ExpandMoreIcon/> </li>
                        <li>home services <ExpandMoreIcon/> </li>
                        <li>auto services <ExpandMoreIcon/> </li>
                        <li>more <ExpandMoreIcon/> </li>
                    </ul>
                </div>
                <div className="links">
                    <ul>
                        <li>For Businesses </li>
                        <li>Write a Review</li>
                        <li><button>Log In </button> </li>
                        <li><button>Sign Up </button> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BusinessHeader
