import React from 'react'
// import { IconType } from 'react-icons'
import './icons.scss'

interface ImageI {
    image: JSX.Element
    // image: IconType  // problems with major version
}

export const Icons = ({ image }: ImageI) => {
    return (
        <div className="social-image-wrap">
            <div className="social-image">{image}</div>
        </div>
    )
}
