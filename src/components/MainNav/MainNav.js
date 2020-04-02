import React from 'react'
import { Link } from 'react-router-dom'
import "./MainNav.css"
export default function MainNav() {
    return (
        <nav className="nav">
        <div className="nav__logo">
            <Link to="/">
            Pieceful Pier
            </Link>
</div>
        <div className="nav__buttons">
            <Link className="nav__button" to="charts">Charts</Link>
            <Link className="nav__button">Sign  Up</Link>
            <Link className="nav__button" to="login">Log In</Link>
        </div>
    </nav>
    )
}
