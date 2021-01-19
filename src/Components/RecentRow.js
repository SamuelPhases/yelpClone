import React from 'react'
import './RecentRow.css'


import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';





function RecentRow() {
    return (
        <div className='recentRow'>
            <div className="recentRowLeft">
                <img src="https://s3-media3.fl.yelpcdn.com/bphoto/voB9ZX5xhoIWs4nI_tZVhw/348s.jpg" alt="" />
                <BookmarkBorderIcon className='bookmark'/>
            </div>
            <div className="recentRowRight">
                <h4>dumpling crawl</h4>
                <div>
                    <h3>30 places &middot; by <span>Lorem A.</span></h3>
                </div>
            </div>
        </div>
    )
}

export default RecentRow
