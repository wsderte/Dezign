import React from 'react'
import './images.scss'

interface ImageI {
    url: string
}

export const Image = ({ url }: ImageI) => {
    return (
        <div className="clients-image">
            <img src={require(`${url}`)} alt={' '} />
            {/* <img src={url} className="clients-image" alt={' '} /> */}
        </div>
    )
}
