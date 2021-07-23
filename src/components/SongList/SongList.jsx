import React from 'react'
import SmallCard from '../SmallCard/SmallCard'
import '../SongList/SongList.style.css'

function SongList(props) {
    return (
            <div className="song-card-list-container" >
            {
                props.tracks.map(e=>{
                    return <SmallCard key={e.id} id={e.id} image={props.image} title={e.name} artist={"ITZY"}></SmallCard>
                })
            }
        </div>
    )
}

export default SongList
