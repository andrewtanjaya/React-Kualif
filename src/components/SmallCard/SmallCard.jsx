import React from 'react'
import '../SmallCard/SmallCard.style.css'

function SmallCard(props) {
    return (
        <div className="small-card-container">
            <div className="small-card-image">
                <img src={props.image} alt="" />
            </div>
            <div className="small-card-detail">
                <p>{props.title}</p>
                <p>{props.artist}</p>
            </div>
        </div>
    )
}

export default SmallCard
