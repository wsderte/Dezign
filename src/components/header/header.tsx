import React from 'react'
import './header.scss'
import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Header: React.FC = () => {
    return (
        <div className="header-wrap">
            <div className="header-box">
                <div className="header-logo-box">
                    <div className="header-logo"></div>
                </div>

                <div className="header-nav">
                    <div className="header-but">HOME</div>
                    <Link to="work" spy={true} smooth={true}>
                        {' '}
                        <div className="header-but">WORK</div>
                    </Link>
                    <Link to="about" spy={true} smooth={true}>
                        {' '}
                        <div className="header-but">ABOUT</div>
                    </Link>
                </div>
            </div>

            <div className="header-text-box">
                <div className="header-text">
                    {' '}
                    {'I’m a designer specialising in'}
                    <span className="white">{' UI/UX '}</span>
                    {'and'}
                    <div>
                        <span className="white">{' Interaction Design'}</span>
                    </div>
                </div>
            </div>
            <div className="header-icon">
                <AiOutlineDown size={40} color={'white'} />
            </div>
        </div>
    )
}

export default React.memo(Header)
