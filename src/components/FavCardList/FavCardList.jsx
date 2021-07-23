import React from 'react'
import FavCard from '../FavCard/FavCard'
import '../FavCardList/FavCardList.style.css'

function FavCardList() {
    return (
        <div className="fav-card-list-container">
            <FavCard image={"http://www.dreamers.id/img_artikel/3410561033-0B31-4BBC-816D-58AE651D4453.jpeg"} title={"Duar"} album={"ITZY"} ></FavCard>
            <FavCard image={"http://www.dreamers.id/img_artikel/3410561033-0B31-4BBC-816D-58AE651D4453.jpeg"} title={"Duar"} album={"ITZY"} ></FavCard>
        </div>
    )
}

export default FavCardList
