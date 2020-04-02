import React from 'react'
import Header from '../../components/Header/Header'
import Player from '../../components/Player/Player'
import Playlists from '../../components/Playlists/Playlists'
import { withRouter } from 'react-router-dom'
import MusicianHeader from './components/MusicianHeader/MusicianHeader'
import "./Musician.css"
import Tracks from '../../components/Tracks/Tracks'
function Musician(props) {
  const { title, mainImg ,tracks } = props.location.state;
  return (
    <>
      <Header />
      <div className="musician__content">
      <MusicianHeader title={title} img={mainImg}/>
        <div className="musician__menu">
          <div className="musician__menu-item">Tracks</div>
          <div className="musician__menu-item">Albums</div>
          <div className="musician__menu-item">Paid Tracks</div>
          <div className="musician__menu-item">Crowdfunding</div>
          <div className="musician__menu-item">Merch</div>
        </div>
        <Tracks tracks={tracks} />
        {/* <Playlists/> */}
      </div>
      <Player />

    </>
  )
}
export default withRouter(Musician)