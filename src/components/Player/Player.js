import React from 'react'
import "./Player.css"
import back from "./imgs/back.png"
import pause from "./imgs/pause.png"
import next from "./imgs/next.png"
import like from "./imgs/like.png"
import volume from "./imgs/volume.png"
import playlist from "./imgs/playlist.png"
export default function Player() {
    return (
        <div className="player">
        <div className="player__controls">
            <img src={back} alt={back} className="player__icon" />
            <img src={pause} alt={pause} className="player__icon player__stop" />
            <img src={next} alt={next} className="player__icon" />

        </div>
        <div className="player__track">
            <h2 className="track__name">
                Midnight- sunset
    </h2>
            <div className="track__progress">
                <div className="track__time">
                    3:45
        </div>
                <div className="track__indicator">
                    <div className="track__indicator-current">

                    </div>
                </div>
                <div className="track__time">
                    4:20
        </div>
            </div>
        </div>

        <div className="player__actions">
            <img src={like} alt={like} className="actions__icon" />
            <img src={volume} alt={volume} className="actions__icon" />
            <img src={playlist} alt={playlist} className="actions__icon" />
        </div>
    </div>

    )
}
