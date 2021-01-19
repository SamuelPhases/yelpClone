import React from 'react'
import './NavCreate.css'

import ContactSupportIcon from '@material-ui/icons/ContactSupport';

function NavCreate() {
    return (
        <div className='navCreate'>
            <div className="logo-create">
                <h3>for business</h3>
            </div>
            <div className="contact">
                <ContactSupportIcon/>
                <p>(234) 481-8702</p>
            </div>
        </div>
    )
}

export default NavCreate
