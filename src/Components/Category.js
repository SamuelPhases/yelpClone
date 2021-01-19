import { Box } from '@material-ui/core'
import React from 'react'
import BoxItem from './BoxItem'
import './Category.css'
// M



function Category() {
    return (
        <div className='categoryContainer'>
            <div className="category">
                <h2>Browse Businesses by Category</h2>
                <div className="box-grid">
                    <BoxItem/>
                    <BoxItem/>
                    <BoxItem/>
                    <BoxItem/>
                    <BoxItem/>
                    <BoxItem/>
                </div>
            </div>
        </div>
    )
}

export default Category
