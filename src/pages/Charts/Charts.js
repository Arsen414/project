import React from 'react'
import "./Charts.css"
import Header from '../../components/Header/Header'
import ContentTitle from '../../components/ContentTitle/ContentTitle'
import Playlists from '../../components/Playlists/Playlists'
import Musicians from '../../components/Musicians/Musicians'
import Player from '../../components/Player/Player'

export default function Charts() {
    return (
        <>
            <Header />
            <div className="charts-content">
                <ContentTitle text="Top Playlists" />
                <Playlists />
                {/* <ContentTitle text="Top Musicians" /> */}
                {/* <Musicians/> */}
              
                </div>
            <Player/>
        </>
    )
}
