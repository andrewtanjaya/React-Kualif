import React from 'react'
import { Link } from 'react-router-dom'
import '../FavCard/FavCard.style.css'

function FavCard(props) {
    return (
        <Link style={{ textDecoration: 'none' }} to={{
            pathname: "/song/" + props.id,
            state : {image : props.image, artist : props.artist}
        }}>
        <div className="fav-card-container">
            <div className="fav-image">
                <img src={props.image} alt="" />
            </div>
            <div className="fav-detail">
                <p><b>{props.title}</b></p>
                <p>{props.album}</p>
            </div>
        </div>
        </Link>
    )
}

export default FavCard
