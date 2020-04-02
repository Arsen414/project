import React from 'react'
import "./Header.css"
import notification from './imgs/notification.png'
import settings from "./imgs/settings.png"
import profile from "./imgs/profile.png"
import search from "./imgs/search.png"
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className="header">
            <div className="menu__logo">
                <Link to="/">Pieceful Pier</Link>
            </div>
            <form action="" className="search">
                <img className="search__input-icon" src={search} alt={search} />
                <input type="search" className="search__input" placeholder="Search" />

            </form>
            <div className="menu">
                <img src={notification} alt={notification} className="menu__icon" />

                <img src={settings} alt={settings} className="menu__icon" />
                <img src={profile} alt={profile} className="menu__img" />
            </div>
        </div>
    )
}
