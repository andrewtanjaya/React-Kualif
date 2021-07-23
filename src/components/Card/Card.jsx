import React from 'react'
import { Link } from 'react-router-dom'
import '../Card/Card.style.css'
function Card(props) {
    return (
        <Link to={{
            pathname: "/artist/" + props.id,
            state : {image : props.image, artist : props.artist}
        }}>
            <div className="card-container">
                <div className="card-image">
                    <img src={props.image} alt={props.artist} />
                </div>
                <div className="card-description">
                    <p>{props.artist}</p>
                </div>
                
            </div>
        </Link>
    )
}

export default Card
