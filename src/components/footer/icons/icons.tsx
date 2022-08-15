import React from 'react'
import './icons.scss'

interface ImageI {
    image: any
}

export const Icons = ({ image }: ImageI) => {
    return (
        <div className="social-image-wrap">
            <div className="social-image">{image}</div>
        </div>
    )
}
