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
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        if(data){
            console.log(data.artist.albums)
            setAlbums(data.artist.albums)
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
            <SmallCardList></SmallCardList>
      </div>
    )
}

export default Home
