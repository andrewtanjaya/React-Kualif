import React, { useEffect, useState } from 'react'
import '../SmallCard/SmallCard.style.css'
import {MdFavoriteBorder} from 'react-icons/md'
import { Link } from 'react-router-dom'

function SmallCard(props) {
    var favItem = JSON.parse(localStorage.getItem("fav"))
    const [faved , setFaved] = useState(false)
    
    useEffect(() => {
        var filteredFav
        if(favItem){
            filteredFav= favItem.filter(track => 
                track.id.toLowerCase().includes(props.id.toLowerCase())
              )
        }
        setFaved(favItem == null ? false : filteredFav.length == 0 ? false : true)
    }, [favItem])
    const addToLocalStorage = ()=>{
        favItem = JSON.parse(localStorage.getItem("fav"))
        if(faved == false){
            if(favItem == null){
                var newFav =
                [{
                    "id" : props.id,
                    "artist" : "ITZY" ,
                    "name" : props.title,
                    "album" : props.image,
                }]
                localStorage.setItem("fav",JSON.stringify(newFav))
                setFaved(true)
            }else{
                
                var newFav =
                {
                    "id" : props.id,
                    "artist" : "ITZY" ,
                    "name" : props.title,
                    "album" : props.image,
                }
                favItem.push(newFav)
                localStorage.setItem("fav",JSON.stringify(favItem))
                setFaved(true)
            }
        }
        else{
            if(favItem.length != 1){
                favItem = favItem.filter(track => !track.id.toLowerCase().includes(props.id.toLowerCase()))
                localStorage.setItem("fav",JSON.stringify(favItem))
                
            }
            else{
                localStorage.setItem("fav",JSON.stringify([]))
            }
            setFaved(false)
        }
        
        

        

        
    }
    return (
        
            <div className="small-card-container">
                <Link style={{ textDecoration: 'none', display:"flex", flexDirection: "row" }} to={{
                    pathname: "/song/" + props.id,
                    state : {image : props.image, artist : props.artist}
                }}>
                    <div className="small-card-image">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="small-card-detail">
                        <p>{props.title}</p>
                        <p>{props.artist}</p>
                    </div>
                </Link>
                <div onClick={addToLocalStorage} className="fav">
                    <MdFavoriteBorder color={faved ? "red" : "white"}></MdFavoriteBorder>
                </div>
            </div>
        
    ) 
}

export default SmallCard
