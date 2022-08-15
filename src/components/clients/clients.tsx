import React from 'react'
import { Image } from '../images/images'
import './clients.scss'

const images = [
    './images/Airbnb.png',
    './images/FedEx.png',
    './images/Google.png',
    './images/Microsoft.png',
]

export const Clients = () => {
    return (
        <div className="clients-wrap">
            <div className="clients-text-box">
                <div className="clients-text">
                    {'Some of'}
                    <span className="white"> {'the clients i have'}</span>
                    <div className="white"> {'designed for'}</div>
                </div>
                <div className="clients-image-box">
                    {images.map((el) => (
                        <Image url={el} key={el} />
                    ))}
                </div>
            </div>
        </div>
    )
}
