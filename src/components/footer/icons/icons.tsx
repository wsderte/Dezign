import React from 'react'
// import { IconType } from 'react-icons'
import './icons.scss'

interface ImageI {
    image: JSX.Element
    // image: IconType  // problems with major version
}

const Icons: React.FC<ImageI> = ({ image }: ImageI) => {
    return (
        <div className="social-image-wrap">
            <div className="social-image">{image}</div>
        </div>
    )
}

export default React.memo(Icons)
