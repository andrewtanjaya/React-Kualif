import React from 'react'
import CardList from '../CardList/CardList'
import Greetings from '../Greetings/Greetings'
import Header from '../Header/Header'
import QuickHeader from '../QuickHeader/QuickHeader'
import SmallCardList from '../SmallCardList/SmallCardList'
import '../Home/Home.style.css'


function Home() {
    document.body.style.backgroundImage = "url(\"https://iphonewalls.net/wp-content/uploads/2016/03/Pastel%20Colors%20Gradient%20iPhone%205%20Wallpaper-320x480.jpg\")";
    document.body.style.backgroundRepeat= "no-repeat";
    document.body.style.backgroundSize= "cover";
    return (
        <div>
            <Header></Header>
            <Greetings></Greetings>
            <CardList></CardList>
            <QuickHeader></QuickHeader>
            <SmallCardList></SmallCardList>
      </div>
    )
}

export default Home
