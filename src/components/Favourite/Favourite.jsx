import React from 'react'
import Header from '../Header/Header'
import '../Favourite/Favourite.style.css'
import FavCardList from '../FavCardList/FavCardList'

function Favourite() {
    var favItem = JSON.parse(localStorage.getItem("fav"))
    
    return (
        <div>
            <Header></Header>
            {favItem.length !== 0 ? <p className="fav-text"><b>Favorite Songs</b></p> : <p className="fav-text"><b>No Favorite Song</b></p>}
            <FavCardList tracks= {favItem}></FavCardList>
        </div>
    )
}

export default Favourite
