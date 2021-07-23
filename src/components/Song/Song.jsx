import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import '../Song/Song.style.css'
import {LOAD_SINGLE_TRACKS} from '../../GraphQL/Queries'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

function Song(props) {
    const {song} = useParams()
    const {error, loading, data} = useQuery(LOAD_SINGLE_TRACKS,{
        variables: {
            id: song.toString()
        }
    })

    const [name, setName] = useState("")
    const [audioUrl, setAudioUrl] = useState("")

    useEffect(() => {
        if(data){
            setName(data.track.name)
            setAudioUrl(data.track.preview_url)
        }
    }, [data])

    document.body.style.backgroundImage = "url("+props.location.state.image+")";
    document.body.style.backgroundRepeat= "no-repeat";
    document.body.style.backgroundSize= "cover";
    return (
        
        <div>
            <Header></Header>
            <div className="song-container">
                <div className="track-img">
                    <img src={props.location.state.image} alt="" />
                </div>
                <div className="music-player">
                    <p><b>{name}</b></p>
                    <p><b>ITZY</b></p>
                    <audio src={audioUrl} controls></audio>
                </div>
            </div>
        </div>
    )
}

export default Song
