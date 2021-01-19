import React from 'react'
import Activity from './Activity'
import './RecentActivity.css'


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function RecentActivity() {
    return (
        <div className='recentActivity'>
            <div className="recentActivityContainer">
                <h3>recent activity</h3>
                <div className="recentActivityContainer-grid">
                    <Activity/>
                    <Activity/>
                    <Activity/>
                    <Activity/>
                    <Activity/>
                </div>
                <h4> <ExpandMoreIcon/> Show more activity in London</h4>
            </div>
        </div>
    )
}

export default RecentActivity
