import React from 'react'
import Pause from "./imgs/Pause.png"
import Options from "./imgs/Options.png"
import "./Track.css"
export default function Track({ name, img, length }) {
    return (
        <div className="musician-page__track">
            <div className="musician-page__track-container">
                <img src={Pause} alt="" className="musician-page__track-play" />
                <img src={img} alt={img} className="musician-page__track-img" />
                <span className="musician-page__track-name">
                    {name}
                </span>
            </div>
            <div className="musician-page__track-container">
                <div className="musician-page__track-length">{length}</div>
                <img src={Options} alt="" className="musician-page__track-options"/>
            </div>

        </div>
    )
}
