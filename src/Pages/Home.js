import React,{useState} from 'react'

import './Home.css'

import Category from '../Components/Category'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import NavBox from '../Components/NavBox'
import NewNavBox from '../Components/NewNavBox'
import RecentActivity from '../Components/RecentActivity'
import RecentCollectionRows from '../Components/RecentCollectionRows'
import TabPhone from '../Components/TabPhone'
import GoogleSignIn from '../Partial/GoogleSignIn'

function Home() {
    const [googlePopup, setGooglePopup] = useState(true)

    return (
        <div className='home'>
            <Header />
            <NavBox/>
            <NewNavBox />
            <RecentCollectionRows />
            <RecentActivity />
            <Category />
            <TabPhone />
            <Footer />
            {
                googlePopup && <GoogleSignIn setGooglePopup={setGooglePopup} />
            }
        </div>
    )
}

export default Home
