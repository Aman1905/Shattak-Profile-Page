import React from 'react'
import './MBody.css'
import rupam from './rupam.jpg'

function LBody() {
    return (
        <div className="OBody">
            <img className="OImg" src={rupam} />
            <p className="OIntro">
                <h1>Rupam Bumba</h1> <br />
                <h5>Founder & CEO of Shattak</h5><br />
                <h5>+91 7908651229</h5><br />
            </p>
            
        </div>
    )
}

export default LBody
