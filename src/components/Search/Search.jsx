import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LOAD_SINGLE_ARTIST_ALBUM } from '../../GraphQL/Queries'
import FavCardList from '../FavCardList/FavCardList'
import Header from '../Header/Header'

function Search() {
    const {search} = useParams()
    const {error, loading, data} = useQuery(LOAD_SINGLE_ARTIST_ALBUM,{
        variables: {
            name: "ITZY"
        }
    })
    const [itzyTrack, setItzyTrack] = useState([])
    const [albums, setAlbums] = useState([])
    let tracks = []

    useEffect(() => {
        if(data){
            setAlbums(data.artist.albums)
            for (let index = 0; index < data.artist.albums.length; index++) {
                for (let i = 0; i <  data.artist.albums[index].tracks.length; i++) {
                        tracks.push({
                            "id" : data.artist.albums[index].tracks[i].id,
                            "name" : data.artist.albums[index].tracks[i].name,
                            "preview_url" : data.artist.albums[index].tracks[i].preview_url,
                            "album" : data.artist.albums[index].image
                        })
                }
                
            }
            const filteredTracks = tracks.filter(track => 
                track.name.toLowerCase().includes(search.toLowerCase())
              )
            setItzyTrack(filteredTracks)
        }
    }, [search])

    return (
        <div>
            <Header></Header>
            { itzyTrack.length == 0 ? <p className="fav-text"><b>No results</b></p> :
            <div>
                <p className="fav-text"><b>Search results</b></p>
            <FavCardList tracks={itzyTrack}></FavCardList></div>}
        </div>
    )
}

export default Search
