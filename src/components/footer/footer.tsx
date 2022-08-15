import React from 'react'
import './footer.scss'

import { FiMail, FiDribbble } from 'react-icons/fi'
import { FaBehance, FaLinkedinIn } from 'react-icons/fa'

import { Icons } from './icons/icons'

const icons = [
    {
        icon: <FiMail size="48px" />,
        key: 4,
    },
    {
        icon: <FaBehance size="48px" />,
        key: 1,
    },
    {
        icon: <FiDribbble size="48px" />,
        key: 2,
    },
    {
        icon: <FaLinkedinIn size="48px" />,
        key: 3,
    },
]

export const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="footer-container">
                <div className="footer-header">
                    Get <span className="white">in Touch. </span>
                </div>
                <div className="footer-text">
                    So that we can talk more about...
                </div>
                <div className="footer-icons-box">
                    {icons.map((el) => (
                        <Icons image={el.icon} key={el.key} />
                    ))}
                </div>
                <div className="footer-end-text">
                    Made with by <span className="white">Srinivas Dezign</span>
                </div>
            </div>
        </div>
    )
}
