import React from 'react'
import './RecentCollectionRows.css'
import RecentRow from './RecentRow'

function RecentCollectionRows() {
    return (
        <div className="recent--collectionRowsContainer">
            <div className='recent--collectionRows'>
                <h4>recent collections</h4>
                <div className="recent--collectionsRowsRow">
                    <RecentRow/>
                    <RecentRow/>
                    <RecentRow/>
                    <RecentRow/>
                    <RecentRow/>
                    <RecentRow/>
                </div>
                <h5>Browse more collections</h5>
            </div>
        </div>
    )
}

export default RecentCollectionRows
