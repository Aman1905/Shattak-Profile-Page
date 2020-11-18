import React from 'react'
import Card from './Card'
import './LBody.css'

function LBody() {
    return (
        <div className="Profile__desc">
            
            <div className="desc__Card1">
                <Card /> 
            </div>

            <div className="desc__Card2">
                <Card /> 
            </div>
            
            <div className="desc__Card3">
                <Card /> 
            
            </div>
        </div>
    )
}

export default LBody
