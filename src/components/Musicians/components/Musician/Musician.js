import React from 'react'
import "./Musician.css"
import ItemTitle from '../../../ItemTitle/ItemTitle'
import { Link } from 'react-router-dom'

export default function Musician({title,genre,img, mainImg, tracks}) {
    return (
        <Link to={{
            pathname : `/musicians/${title}`,
            state : {
                title,genre,img, mainImg, tracks
            }
        }}>
        <div className="musician">
        <div className="img-container ">
            <img src={img} alt={img} className="musician__img round" />
            <div className="img-overlay round">

            </div>
        </div>

        <ItemTitle text={title}/>

        <div className="musician__genre">
            {genre}
        </div>
    </div>
    </Link>

    )
}
