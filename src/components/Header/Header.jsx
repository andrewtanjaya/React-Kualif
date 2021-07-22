import React from 'react'
import {MdHome,MdFavoriteBorder} from 'react-icons/md'
import {BiSearchAlt2} from 'react-icons/bi'
import '../Header/Header.style.css'

function Header() {
    return (
        <div className="header-nav">
            <div className="logo"></div>
            <div className="nav-mid">
                <MdHome color={"#928E92"} size={24}></MdHome>
                <MdFavoriteBorder color={"#928E92"} size={24}></MdFavoriteBorder>
                <BiSearchAlt2 color={"#928E92"} size={24}></BiSearchAlt2>
            </div>
            <div className="user">
                
            </div>
        </div>
    )
}

export default Header
