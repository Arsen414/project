import React from 'react'
import ContentTitle from '../../../../components/ContentTitle/ContentTitle'
import "./MusicianHeader.css"
export default function MusicianHeader({ title, img }) {
    return (
        <div className="musician-page__header">
            <div className="musician-page__info">
                <ContentTitle text={title} bigger={true} />

                <div className="musician-page__buttons">
                    <button className="musician-page__button">
                        RADIO
            </button>
                    <button className="musician-page__button">
                        SUBSCRIBE
            </button>
                </div>
            </div>
            <div className="musician-page__img">
                <img src={img} alt={img} />
                <div className="musician-page__img-background">

                </div>
            </div>


        </div>
    )
}
