import React from 'react'
import "./ContentTitle.css"
export default function ContentTitle({text, bigger}) {
    return (
        <h1 className={`content__title ${bigger && "content__title--bigger"}`}>
                   {text}
                
        </h1>
    )
}
