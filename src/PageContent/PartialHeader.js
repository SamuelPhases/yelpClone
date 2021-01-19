import React from 'react'
import './PartialHeader.css'

function PartialHeader() {
    return (
        <div className='partialHeaderContainer'>
            <div className="partialHeader">
                <div className="logo-txt">
                    {/* <div className="logo"></div> */}
                    <h3 className="txt"></h3>
                </div>
                <ul>
                    <li>Need Help <a href="tel:+23407034818702">+(234)07034818702</a></li>
                    <li><button>Log In</button></li>
                    <li><button>manage my free listing</button></li>
                </ul>
            </div>
        </div>
    )
}

export default PartialHeader
