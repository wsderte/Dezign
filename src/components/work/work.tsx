import React from 'react'
import { Template } from './template/template'
import './work.scss'
const estate = require('./images/estate.png')
const plant = require('./images/plant.png')
const smartHome = require('./images/smartHome.png')
const Dezign = require('./images/Dezign.png')

export const Work = () => {
    const templates = [
        {
            image: estate,
            header: 'Real estate Template',
            category: 'Website Design',
            reverse: false,
            key: 0,
        },
        {
            image: plant,
            header: 'Plant identification app',
            category: 'Mobile App',
            reverse: true,
            key: 1,
        },
        {
            image: smartHome,
            header: 'Smart Home App',
            category: 'Mobile App',
            reverse: false,
            key: 2,
        },
        {
            image: Dezign,
            header: 'Logo Animation',
            category: 'Animation',
            reverse: true,
            key: 3,
        },
    ]

    return (
        <div className="work-wrap">
            <div className="work-header">
                Selected <span className="white">Works</span>
            </div>
            <div className="work-container">
                {templates.map((el) => (
                    <Template
                        image={el.image}
                        header={el.header}
                        category={el.category}
                        reverse={el.reverse}
                        key={el.key}
                    />
                ))}
            </div>
        </div>
    )
}
