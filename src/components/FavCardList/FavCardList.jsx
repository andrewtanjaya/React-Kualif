import React from 'react'
import FavCard from '../FavCard/FavCard'
import '../FavCardList/FavCardList.style.css'

function FavCardList(props) {
    return (
        <div className="fav-card-list-container">
            {
                props.tracks.map(e=>{
                    return <FavCard key={e.id} id={e.id} image={e.album} title={e.name} album={"ITZY"} ></FavCard>
                })
            }
            
            {/* <FavCard image={"http://www.dreamers.id/img_artikel/3410561033-0B31-4BBC-816D-58AE651D4453.jpeg"} title={"Duar"} album={"ITZY"} ></FavCard> */}
        </div>
    )
}

export default FavCardList
