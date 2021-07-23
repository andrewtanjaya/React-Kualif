import React from 'react'
import CardList from '../CardList/CardList'
import Greetings from '../Greetings/Greetings'
import Header from '../Header/Header'
import QuickHeader from '../QuickHeader/QuickHeader'
import SmallCardList from '../SmallCardList/SmallCardList'
import '../Home/Home.style.css'


function Home() {
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
