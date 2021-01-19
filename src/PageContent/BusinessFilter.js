import React from 'react'
import './BusinessFilter.css'

function BusinessFilter() {
    return (
        <div className='businessFilterContainer'>
            <div className="businessFilter">
                <div className="businessFilter-Header">
                    <h3>1 filter</h3>
                    <p className="txt">Offers Delivery</p>
                    <p className="txt-link">Clear all</p>
                </div>
                <div className="range">
                    <button>$</button>
                    <button>$$</button>
                    <button>$$$</button>
                    <button>$$$$</button>
                </div>
                <div className="suggested">
                    <h3>suggested</h3>
                    <div className="grid">
                        <div className="check-list">
                            <input type="checkbox" name="checkOne" id="checkOne"/>
                            <label htmlFor="checkOne">Curbside Pickup</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox" name="checkTwo" id="checkTwo"/>
                            <label htmlFor="checkTwo">Open Now <span>9:17Am</span> </label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox" name="checkThree" id="checkThree"/>
                            <label htmlFor="checkThree">Virtual Training Sessions </label>
                        </div>
                    </div>
                </div>
                <div className="features suggested">
                    <h3>features</h3>
                    <div className="grid">
                        <div className="check-list">
                            <input type="checkbox" name="kids" id="kids" />
                            <label htmlFor="kids">Good for Kids</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox" name="groups" id="groups" />
                            <label htmlFor="groups">Good for Groups</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox" name="tv" id="tv" />
                            <label htmlFor="tv">Has TV</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox" name="lunch" id="lunch" />
                            <label htmlFor="lunch">Good for Lunch</label>
                        </div>
                        <h3>See all</h3>
                    </div>
                </div>
                <div className="neighbourhoods suggested">
                    <h3>neighbourhood</h3>
                    <div className="grid">
                        <div className="check-list">
                            <input type="checkbox" name="sunset" id="sunset" />
                            <label htmlFor="sunset">Outer Sunset</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox" name="hill" id="hill" />
                            <label htmlFor="hill">Forest Hill</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox" name="stonestown" id="stonestown" />
                            <label htmlFor="stonestown">Stonestown</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox" name="richmond" id="richmond" />
                            <label htmlFor="richmond">Inner Richmond</label>
                        </div>
                        <h3>See all</h3>
                    </div>
                </div>
                <div className="distance suggested">
                    <h3>distance</h3>
                    <div className="grid">
                        <div className="check-radio check-list">
                            <input type="radio" name="distance" id="view"/>
                            <label htmlFor="view">Bird's-eye view</label>
                        </div>
                        <div className="check-radio check-list">
                            <input type="radio" name="distance" id="driving"/>
                            <label htmlFor="driving">Driving (5 mi)</label>
                        </div>
                        <div className="check-radio check-list">
                            <input type="radio" name="distance" id="biking"/>
                            <label htmlFor="biking">Biking (2 mi)</label>
                        </div>
                        <div className="check-radio check-list">
                            <input type="radio" name="distance" id="walking"/>
                            <label htmlFor="walking">Walking (1 mi)</label>
                        </div>
                        <div className="check-radio check-list">
                            <input type="radio" name="distance" id="blocks"/>
                            <label htmlFor="blocks">Within 4 blocks</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessFilter
