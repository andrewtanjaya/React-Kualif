import React from 'react'
import '../Card/Card.style.css'
function Card(props) {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.image} alt={props.artist} />
            </div>
            <div className="card-description">
                <p>{props.artist}</p>
            </div>
            
        </div>
    )
}

export default Card
