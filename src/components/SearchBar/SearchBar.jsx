import React, {  useState } from 'react'
import '../SearchBar/SearchBar.style.css'
import {IoMdArrowBack} from 'react-icons/io'
import { useHistory } from 'react-router-dom';

function SearchBar(props) {
    const history = useHistory();
    const [display, setDisplay] = useState("block")
    const [searchValue, setSearchValue] = useState("")
    // const hideSearch = ()=>{
    //     setDisplay("none")
    // }
    // useEffect(() => {
    //     setDisplay("block")
    // }, [])
    const redirectToSearch = (e)=>{
        setSearchValue(e.target.value)
        
    }

    const checkEnter = (e)=>{
        if (e.key === 'Enter') {
            history.push("/search/"+searchValue)
          }
    }

    return (
        <div className="search-container" style={{display: display}}>
            <div className="search-bar-cont">
                <div className="back-search-icon">
                    <IoMdArrowBack onClick={props.toggle} color={"#909090"} size={24}></IoMdArrowBack>
                </div>
                <input type="text" placeholder="Search" onKeyDown={checkEnter} onChange={redirectToSearch } ></input>
            </div>
        </div>
    )
}

export default SearchBar
