import React from 'react'
import './header.scss'

export const Header = () => {
    return (
        <div className="header-wrap">
            <div className="header-box">
                <div className="header-logo-box">
                    <div className="header-logo"></div>
                </div>
                <div className="header-nav">
                    <div className="header-but">HOME</div>
                    <div className="header-but">WORK</div>
                    <div className="header-but">ABOUT</div>
                </div>
            </div>
            <div className="header-text-box">
                <div className="header-text">
                    {' '}
                    {'I’m a designer specialising in'}
                    <span className="white">{' UI/UX '}</span>
                    {'and'}
                    <span className="white">{' Interaction Design'}</span>
                </div>
            </div>
        </div>
    )
}
