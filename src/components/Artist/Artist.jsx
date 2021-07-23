import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../Header/Header'
import '../Artist/Artist.style.css'
import {IoShuffle} from 'react-icons/io5'
import {FiRadio} from 'react-icons/fi'
import SmallCardList from '../SmallCardList/SmallCardList'

function Artist(props) {
    const {artist} = useParams()
    document.body.style.backgroundImage = "url("+props.location.state.image+")";
    document.body.style.backgroundRepeat= "no-repeat";
    document.body.style.backgroundSize= "contain";
    useEffect(() => {
        console.log(artist)
        console.log(props.location.state.image);
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="artist-container">
                <p class="artist-name"><b>{artist}</b></p>
                <div className="but-ex">
                    <button><IoShuffle size={24}></IoShuffle><b>SHUFFLE</b></button>
                    <button><FiRadio size={24}></FiRadio><b>RADIO</b></button>
                </div>
                <p><b>Songs</b></p>
            </div>
            <SmallCardList></SmallCardList>
        </div>
    )
}

export default Artist
