import React from 'react'
import '../Greetings/Greetings.style.css'
import {BiUserCircle} from 'react-icons/bi'
function Greetings() {
    return (
        <div className="greetings-container">
            <div className="user-big">
            <BiUserCircle  size={54}></BiUserCircle>
            </div>
            <div className="greet-text">
                <p>MUSIC TO GET YOU STARTED</p>
                <p><b>Welcome Midzy!</b></p>
            </div>
        </div>
    )
}

export default Greetings
