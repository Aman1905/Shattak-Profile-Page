import React from 'react'
import Header from './Header'
import shattak from './shattak.jpg'
import MBody from './MBody'
import LBody from './LBody'

function Profile() {
    return (
        <div className="Profile__Page">
            <div className="Profile__Header">
                <Header />
            </div>
            <div className="Profile__UBody">
                <img src={shattak} width='100%' height="175px"/>
            </div>
            <div className="Profile__MBody">
                <MBody />
            </div>
            <div className="Profile__LBody">
                <LBody />
                
            </div>

            
        </div>
    )
}

export default Profile
