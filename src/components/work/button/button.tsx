import React from 'react'
import './button.scss'

import { AiOutlineRight } from 'react-icons/ai'

export const Button = () => {
    return (
        <div className="button-wrap">
            <div className="button-text">View Work</div>
            <AiOutlineRight size="24px" />
        </div>
    )
}
