import React from 'react'
import Footer from '../Components/Footer'
import NavCreate from '../PageContent/NavCreate'
import './RegisterTwo.css'

function RegisterTwo() {
    return (
        <div className='registerTwo'>
            <NavCreate />
            <div className="registerTwoContainer">
                <div className="sidea">
                    <h3>Get started by telling us how   your customers can reach you</h3>
                    <p>
                        Add your business's contact information to start setting up your account. We are adding Lorem, London, UK to Yelp Clone.
                         <span>Change</span>
                    </p>
                    <form action="">
                        <input type="text" placeholder='Business categories'/>
                        <input type="text" placeholder='Business phone number'/>
                        <input type="text" placeholder='Website'/>
                        <input type="text" placeholder='Street address'/>
                        <input type="text" placeholder='Your email address' />
                        <p>By continuing, you agree to Yelp’s Business Terms and acknowledge our <span>Privacy Policy.</span> We may email you about Yelp’s products, services and local events. You can unsubscribe at any time.
                        </p>
                        <button type="submit">Continue</button>
                    </form>
                </div>
                <div className="sideb"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default RegisterTwo
