import React from 'react'
import Card from '../Card/Card'
import '../CardList/CardList.style.css'

function CardList(props) {
    return (
        <div className="list-container">
            {
                props.albums.map(e=>{
                    return <Card key={e.id} id={e.id} image={e.image} artist={e.name}></Card>
                })
            }
        </div>
    )
}

export default CardList
