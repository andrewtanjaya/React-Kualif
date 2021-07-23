import React from 'react'
import {MdHome,MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import {BiSearchAlt2} from 'react-icons/bi'
import '../Header/Header.style.css'
import {NavLink, useLocation} from 'react-router-dom'

function Header() {
    const { pathname } = useLocation();
    return (
        <div className="header-nav">
            <div className="logo"></div>
            <div className="nav-mid">
            <NavLink exact to="/" className="home-nav"
            activeStyle={{ color:'white' }}>
                <MdHome color={pathname === "/" ? "white":"#928E92"} size={24}></MdHome>
            </NavLink>
            <NavLink exact to="/fav" className="fav-nav"
            activeStyle={{ color:'white' }}>
                {pathname == "/fav" ? <MdFavorite color={"white"} size={24}></MdFavorite> : <MdFavoriteBorder color={"#928E92"} size={24}></MdFavoriteBorder>}
            </NavLink>
                <BiSearchAlt2 color={"#928E92"} size={24}></BiSearchAlt2>
            </div>
            <div className="user">

            </div>
        </div>
    )
}

export default Header
