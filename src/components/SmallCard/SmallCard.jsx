import React from 'react'
import '../SmallCard/SmallCard.style.css'
import {MdFavoriteBorder} from 'react-icons/md'
import { Link } from 'react-router-dom'

function SmallCard(props) {
    return (
        <Link style={{ textDecoration: 'none' }} to={{
            pathname: "/song/" + props.id,
            state : {image : props.image, artist : props.artist}
        }}>
            <div className="small-card-container">
                <div className="small-card-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="small-card-detail">
                    <p>{props.title}</p>
                    <p>{props.artist}</p>
                </div>
                <div className="fav">
                    <MdFavoriteBorder color={"white"}></MdFavoriteBorder>
                </div>
            </div>
        </Link>
    ) 
}

export default SmallCard
