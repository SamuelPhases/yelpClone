import React from 'react'
import './RegisterNavbar.css'

function RegisterNavbar() {
    return (
        <div className='registerNavbar-Container'>
            <div className="cont-navbar">
                <div className="registerNavbar">
                    <div className="logo-reg">
                        <div className="icon"></div>
                        <h2>for business</h2>
                    </div>
                    <div className="btns">
                        <button>log in</button>
                        <button>
                                sign up
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterNavbar
