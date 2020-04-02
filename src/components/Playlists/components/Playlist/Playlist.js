import React from 'react'
import "./Playlist.css"
import play from "./imgs/play.png"
import ItemTitle from '../../../ItemTitle/ItemTitle'
export default function Playlist({title, countOfTracks, countOfLikes,img}) {
    return (
        <div className="playlist">
                <div className="img-container">
                    <img src={img} alt={img} className="playlist__img" />
                    <div className="img-overlay">
                        <img src={play} alt="" className="playlist__img-overlay-img" />
                    </div>
                </div>
                <ItemTitle text={title}/>
                <div className="playlist__info">
                    <span className="playlist__info-item">
                        {countOfTracks} tracks
                    </span>
                    <span className="playlist__info-item">
                        {countOfLikes} likes
                    </span>
                </div>
            </div>
    )
}
