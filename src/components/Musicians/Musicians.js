import React from 'react'
import "./Musicians.css"
import Musician from './components/Musician/Musician'

export default function Musicians() {
    const musicians = [
        {
            title: "The Midnight",
            genre: "Retrowave",
            mainImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            tracks : [
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:20"},
                {name : "Great", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Wait", img: "https://bit.ly/2UAjOxu" , length:"4:25"},
                {name : "Height", img: "https://bit.ly/2UAjOxu" , length:"4:22"},
                {name : "Paradise", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:23"}
            ]
        },
        {
            title: "50 cent",
            genre: "Rap",
            mainImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYjT1Xe7n7EB9F2vJ96mzWWXDvN0ETBZR7li4xv1gzqGJ4pUi8&usqp=CAU",
            img: "https://thumbs.dfs.ivi.ru/storage6/contents/8/f/a24061810ecc13b94daa3665f2a50d.jpg",
            tracks : [
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:20"},
                {name : "Great", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Wait", img: "https://bit.ly/2UAjOxu" , length:"4:25"},
                {name : "Height", img: "https://bit.ly/2UAjOxu" , length:"4:22"},
                {name : "Paradise", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:23"}
            ]
        },
        {
            title: "Scriptonite",
            genre: "hip-hop",
            mainImg : "data:image/jpeg;base64,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",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR92nEqU0ZMa9JiDfm5_LT2AopsdZi0l6C3uTq1m5hXazhDTWYu&usqp=CAU",
            tracks : [
                {name : "Притон", img: "https://bit.ly/2UAjOxu" , length:"4:20"},
                {name : "24 улица", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Уроборос", img: "https://bit.ly/2UAjOxu" , length:"4:25"},
                {name : "Height", img: "https://bit.ly/2UAjOxu" , length:"4:22"},
                {name : "Paradise", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:23"}
            ]
        },
        {
            title: "The Midnight",
            genre: "Retrowave",
            mainImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",

            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            tracks : [
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:20"},
                {name : "Great", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Wait", img: "https://bit.ly/2UAjOxu" , length:"4:25"},
                {name : "Height", img: "https://bit.ly/2UAjOxu" , length:"4:22"},
                {name : "Paradise", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:23"}
            ]
        },
        {
            title: "The Midnight",
            genre: "Retrowave",
            mainImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",

            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            tracks : [
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:20"},
                {name : "Great", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Wait", img: "https://bit.ly/2UAjOxu" , length:"4:25"},
                {name : "Height", img: "https://bit.ly/2UAjOxu" , length:"4:22"},
                {name : "Paradise", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:23"}
            ]
        }, {
            title: "The Midnight",
            genre: "Retrowave",
            mainImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",

            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            tracks : [
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:20"},
                {name : "Great", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Wait", img: "https://bit.ly/2UAjOxu" , length:"4:25"},
                {name : "Height", img: "https://bit.ly/2UAjOxu" , length:"4:22"},
                {name : "Paradise", img: "https://bit.ly/2UAjOxu" , length:"4:24"},
                {name : "Song", img: "https://bit.ly/2UAjOxu" , length:"4:23"}
            ]
        },
       
    ]
    return (
        <div className="musicians">
            {musicians.map(({ title, genre, img, mainImg, tracks }) => {
                return <Musician title={title} img={img} genre={genre} mainImg={mainImg} tracks={tracks}/>
            })}
        </div>
    )
}
