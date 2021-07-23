import React from 'react'
import '../FavCard/FavCard.style.css'

function FavCard(props) {
    return (
        <div className="fav-card-container">
            <div className="fav-image">
                <img src={props.image} alt="" />
            </div>
            <div className="fav-detail">
                <p><b>{props.title}</b></p>
                <p>{props.album}</p>
            </div>
        </div>
    )
}

export default FavCard
