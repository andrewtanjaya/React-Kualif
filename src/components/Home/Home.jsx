import React, { useEffect, useState } from 'react'
import CardList from '../CardList/CardList'
import Greetings from '../Greetings/Greetings'
import Header from '../Header/Header'
import QuickHeader from '../QuickHeader/QuickHeader'
import SmallCardList from '../SmallCardList/SmallCardList'
import '../Home/Home.style.css'
import {LOAD_SINGLE_ARTIST_ALBUM} from '../../GraphQL/Queries'
import {useQuery} from '@apollo/client'


function Home() {

    const {error, loading, data} = useQuery(LOAD_SINGLE_ARTIST_ALBUM,{
        variables: {
            name: "ITZY"
        }
    })
    const [itzyAlbum, setItzyAlbum] = useState([])
    const [itzyTrack, setItzyTrack] = useState([])
    const [albums, setAlbums] = useState([])
    let tracks = []

    useEffect(() => {
        if(data){
            console.log(data.artist.albums.length)
            setAlbums(data.artist.albums)
            let counter = 0;
            for (let index = 0; index < data.artist.albums.length; index++) {
                for (let i = 0; i < 5 && data.artist.albums[index].tracks[i]; i++) {

                        // console.log(typeof(data.artist.albums[index].tracks[i]))
                        tracks.push({
                            "id" : data.artist.albums[index].tracks[i].id,
                            "name" : data.artist.albums[index].tracks[i].name,
                            "preview_url" : data.artist.albums[index].tracks[i].preview_url,
                            "album" : data.artist.albums[index].image
                        })
                }
                
            }
            setItzyTrack(tracks)
            console.log(itzyTrack)
        }
    }, [data])

    document.body.style.backgroundImage = "url(\"https://iphonewalls.net/wp-content/uploads/2016/03/Pastel%20Colors%20Gradient%20iPhone%205%20Wallpaper-320x480.jpg\")";
    document.body.style.backgroundRepeat= "no-repeat";
    document.body.style.backgroundSize= "cover";
    return (
        <div>
            <Header></Header>
            <Greetings></Greetings>
            <CardList albums={albums}></CardList>
            <QuickHeader></QuickHeader>
            <SmallCardList tracks={itzyTrack}></SmallCardList>
      </div>
    )
}

export default Home
