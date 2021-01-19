import React from 'react'
import Footer from '../Components/Footer'
import BusinessContent from '../PageContent/BusinessContent'
import BusinessDirection from '../PageContent/BusinessDirection'
import BusinessFilter from '../PageContent/BusinessFilter'
import BusinessHeader from '../PageContent/BusinessHeader'
import './Business.css'


function Business() {
    return (
        <div className='business' >
            <BusinessHeader/>
            <div className="business-content-section">
                <div className="footer-section">
                    <div className="split">
                        <BusinessFilter />
                        <BusinessContent/>
                    </div>
                    <div className="footer-content">
                        <Footer/>
                    </div>
                </div>
                <div className="map-section">
                    <BusinessDirection/>
                </div>
            </div>
        </div>
    )
}

export default Business
