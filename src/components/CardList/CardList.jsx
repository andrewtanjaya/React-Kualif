import React from 'react'
import Card from '../Card/Card'
import '../CardList/CardList.style.css'

function CardList() {
    return (
        <div className="list-container">
            <Card image={"https://i.pinimg.com/originals/95/92/5c/95925cabc8e6de59f1efd3faae3008f9.jpg"} artist={"ITZY"}></Card>
            <Card image={"https://static.billboard.com/files/2020/11/aespa-Black-Mamba-mv-screenshot-2020-billboard-1548-1605714096-compressed.jpg"} artist={"Aespa"}></Card>
            <Card image={"https://i.redd.it/dcce8bb2utk01.jpg"} artist={"Rich Brian"}></Card>
            <Card image={"https://id-test-11.slatic.net/p/7/topi-snapback-bruno-mars-24k-white-7994-20732597-9c6fd713e4083eebc0ce31b2c2cc52ca-catalog.jpg_720x720q80.jpg_.webp"} artist={"Bruno Mars"}></Card>
            <Card image={"https://i.pinimg.com/originals/95/92/5c/95925cabc8e6de59f1efd3faae3008f9.jpg"} artist={"ITZY"}></Card>
            <Card image={"https://i.pinimg.com/originals/95/92/5c/95925cabc8e6de59f1efd3faae3008f9.jpg"} artist={"ITZY"}></Card>
        </div>
    )
}

export default CardList
