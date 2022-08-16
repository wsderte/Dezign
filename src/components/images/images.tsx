import React from 'react'
import './images.scss'

interface UrlI {
    url: string
}

export const Image = ({ url }: UrlI) => {
    return (
        <div className="clients-image">
            <img src={require(`${url}`)} alt={' '} />
            {/* <img src={url} className="clients-image" alt={' '} /> */}
        </div>
    )
}
