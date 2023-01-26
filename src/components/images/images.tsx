import React from 'react'
import './images.scss'

interface UrlI {
    url: string
}

const Image: React.FC<UrlI> = ({ url }: UrlI) => {
    return (
        <div className="clients-image">
            <img src={require(`${url}`)} alt={' '} />
            {/* <img src={url} className="clients-image" alt={' '} /> */}
        </div>
    )
}

export default React.memo(Image)
