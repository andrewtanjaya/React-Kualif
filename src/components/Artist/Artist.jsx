import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../Header/Header'
import '../Artist/Artist.style.css'
import {IoShuffle} from 'react-icons/io5'
import {FiRadio} from 'react-icons/fi'
import SmallCardList from '../SmallCardList/SmallCardList'
import SongList from '../SongList/SongList'
import {LOAD_SINGLE_ALBUM_TRACKS} from '../../GraphQL/Queries'
import { useQuery } from '@apollo/client'

function Artist(props) {
    const {artist} = useParams()
    const {error, loading, data} = useQuery(LOAD_SINGLE_ALBUM_TRACKS,{
        variables: {
            id: artist
        }
    })

    
    const [itzyTrack, setItzyTrack] = useState([])

    useEffect(() => {
        if(data){
            console.log(data.album.tracks)  
            setItzyTrack(data.album.tracks)
        }
    }, [data])

    
    document.body.style.backgroundImage = "url("+props.location.state.image+")";
    document.body.style.backgroundRepeat= "no-repeat";
    document.body.style.backgroundSize= "cover";
    return (
        <div>
            <Header></Header>
            <div className="artist-container">
                <p className="artist-name"><b>{props.location.state.artist}</b></p>
                <div className="but-ex">
                    <button><IoShuffle size={24}></IoShuffle><b>SHUFFLE</b></button>
                    <button><FiRadio size={24}></FiRadio><b>RADIO</b></button>
                </div>
                <p><b>Songs</b></p>
            </div>
            <SongList image={props.location.state.image} tracks={itzyTrack}></SongList>
        </div>
    )
}

export default Artist
