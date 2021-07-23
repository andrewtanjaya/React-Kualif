import React from 'react'
import '../SmallCard/SmallCard.style.css'
import {MdFavoriteBorder} from 'react-icons/md'

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
            <div className="fav">
                <MdFavoriteBorder color={"white"}></MdFavoriteBorder>
            </div>
        </div>
    ) 
}

export default SmallCard
