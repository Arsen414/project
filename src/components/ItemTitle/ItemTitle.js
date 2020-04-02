import React from 'react'
import './ItemTitle.css'
export default function ItemTitle({text}) {
    return (
        <h2 className="item__title">
                   {text}
                </h2>
    )
}
