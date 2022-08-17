import React from 'react'
import './about.scss'

export const About = () => {
    return (
        <div id="about" className="about-wrap">
            <div className="about-container">
                <div className="about-title">
                    <div className="about-header">A BIT ABOUT ME</div>
                    <div className="about-text">
                        I am a UI/UX designer who is passionate about creating
                        <span className="white">
                            beautiful and joyful digital experiences. Besides
                            design, I love music, games and travelling.
                        </span>
                    </div>
                </div>
                <div className="about-images-box">
                    <div className="about-img img-music"></div>
                    <div className="about-horizontal">
                        <div className="about-img img-game"></div>
                        <div className="about-img img-mountain"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
