import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import '../Favourite/Favourite.style.css'
import FavCardList from '../FavCardList/FavCardList'

function Favourite() {
    const [fav, setFav] = useState([])
    useEffect(() => {
        setFav(JSON.parse(localStorage.getItem("fav")))
    }, [])
    
    return (
        <div>
            <Header></Header>
            {fav != null ? <p className="fav-text"><b>Favorite Songs</b></p> : <p className="fav-text"><b>No Favorite Song</b></p>}
            {fav == null ? <></> : <FavCardList tracks= {fav}></FavCardList>}
        </div>
    )
}

export default Favourite
