import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import MainNav from '../../components/MainNav/MainNav'


function Home(props) {

    return (
        <>
            <MainNav/>
            <div className="content">
                <div className="greetings">
                    <h1 className="content__heading">
                        Create. Listen. Grow
            </h1>
                    <div className="description">Good place for connect musicians with customers and listeners </div>
                    <div className="buttons">
                        <button className="greetings__button">
                            <Link to="login">JOIN NOW</Link>
                        </button>
                        <button className="greetings__button">
                            LEARN MORE
                </button>
                    </div>


                </div>


                <div className="background">
                </div>


            </div>
        </>
    )
}

export default Home