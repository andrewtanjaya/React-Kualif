import React from 'react'
import Header from '../Header/Header'
import '../Favourite/Favourite.style.css'
import FavCardList from '../FavCardList/FavCardList'

function Favourite() {
    return (
        <div>
            <Header></Header>
            <p className="fav-text"><b>Favourite Songs</b></p>
            <FavCardList></FavCardList>
        </div>
    )
}

export default Favourite
