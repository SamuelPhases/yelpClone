import React from 'react'
import Footer from '../Components/Footer'
import RegisterNavbar from '../PageContent/RegisterNavbar'
import './Register.css'

function Register() {
    return (
        <div className='registerContainer'>
            <RegisterNavbar />
            <div className="registerContainerNavbar">
                <div className="title">
                    <h2>Let's look up your business</h2>
                    <p>Your business may already be on  yelp clone. If it isn't you may add it.</p>
                </div>
                <form action="">
                    <div>
                        <div className="label-group">
                            <label htmlFor="zip">
                                Zip
                            </label>
                            <p>UK<span>(change)</span> </p>
                        </div>
                        <input type="number" name="" id="zip" placeholder='94123' />
                    </div>
                    <div>
                        <label htmlFor="name">
                            business name
                        </label>
                        <input type="number" name="" id="name" placeholder="Lorem's Dinner"/>
                    </div>
                    <button>continue</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Register
