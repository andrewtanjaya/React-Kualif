import React, { useState } from 'react'
import {MdHome,MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import {BiSearchAlt2, BiUserCircle} from 'react-icons/bi'
import '../Header/Header.style.css'
import {NavLink, useLocation, Link} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

function Header() {
    const { pathname } = useLocation();
    
    const [searchDisplay, setSearchDisplay] = useState(false)
    const showSearch = ()=>{
        setSearchDisplay(!searchDisplay)
        
    }
    return (
        <div className="header-fixed">
            <div className="header-nav">
            <Link style={{ textDecoration: 'none' }} exact="true" to="/" className="logo-nav">
                <div className="logo-text">
                <div className="logo"></div>
                <p><b>Music</b></p>
                </div>
            </Link>

            <div className="nav-mid">
                <NavLink exact to="/" className="home-nav"
                    activeStyle={{ color:'white' , textDecoration:'none' }}>
                    <MdHome className="home-nav-icon" color={pathname === "/" ? "white":"#928E92"} size={24}></MdHome>
                    <p className="header-link-text"><b>Home</b></p>
                </NavLink>

                <NavLink exact to="/fav" className="fav-nav"
                    activeStyle={{ color:'white' , textDecoration:'none' }}>
                    {pathname === "/fav" ? <MdFavorite className="fav-nav-icon" color={"white"} size={24}></MdFavorite> : <MdFavoriteBorder className="fav-nav-icon" color={"#928E92"} size={24}></MdFavoriteBorder>}
                    <p className="header-link-text"><b>Favorite</b></p>
                </NavLink>
                    <div onClick={showSearch} onMouseOver={({target})=>target.style.color='white'} 
                        onMouseOut={({target})=>target.style.color='#928E92'} className="search-nav">
                        <BiSearchAlt2 className="search-nav-icon"  color={pathname.startsWith("/search") ? "white" : "#928E92"} size={24}></BiSearchAlt2>
                        <p className="search-link-text"><b>Search</b></p>
                    </div>

            </div>
            {/* <div className="user">

            </div> */}
            <BiUserCircle size={30} color={"white"}></BiUserCircle>
            {searchDisplay ? <SearchBar toggle={showSearch}></SearchBar> : <></>}
            
        </div>
        </div>
    )
}

export default Header
