import React, { useEffect, useState } from 'react'
import '../SearchBar/SearchBar.style.css'
import {IoMdArrowBack} from 'react-icons/io'

function SearchBar(props) {
    const [display, setDisplay] = useState("block")
    // const hideSearch = ()=>{
    //     setDisplay("none")
    // }
    // useEffect(() => {
    //     setDisplay("block")
    // }, [])
    return (
        <div className="search-container" style={{display: display}}>
            <div className="search-bar-cont">
                <div className="back-search-icon">
                    <IoMdArrowBack onClick={props.toggle} color={"#909090"} size={24}></IoMdArrowBack>
                </div>
                <input type="text" placeholder="Search"></input>
            </div>
        </div>
    )
}

export default SearchBar
