import React from 'react'
import ContentTitle from '../ContentTitle/ContentTitle'
import "./Tracks.css"
import Track from './components/Track/Track'
export default  function Tracks({tracks}) {
    return (
        <div className="musician__tracks">
            <ContentTitle text="Popular"/>
            <div className="musician__tracks-list">
                {tracks.map(({name , img , length}) => <Track name={name} length={length} img={img}/>)}
            </div>
        </div>
    )
}


