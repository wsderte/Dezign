import React from 'react'
import './button.scss'

import { AiOutlineRight } from 'react-icons/ai'

const Button: React.FC = () => {
    return (
        <div className="button-wrap">
            <div className="button-text">View Work</div>
            <AiOutlineRight size="24px" />
        </div>
    )
}

export default React.memo(Button)
