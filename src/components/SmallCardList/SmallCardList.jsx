import React from 'react'
import SmallCard from '../SmallCard/SmallCard'
import '../SmallCardList/SmallCardList.style.css'

function SmallCardList(props) {
    return (
        <div className="small-card-list-container" >
            {
                props.tracks.map(e=>{
                    return <SmallCard key={e.id} id={e.id} image={e.album} title={e.name} artist={"ITZY"}></SmallCard>
                })
            }
        </div>
    )
}

export default SmallCardList
