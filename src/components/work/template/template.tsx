import React from 'react'
import CSS from 'csstype'
import Button from '../button/button'
import './template.scss'

interface template {
    image: string
    header: string
    category: string
    reverse: boolean
}

const Template: React.FC<template> = ({
    image,
    header,
    category,
    reverse,
}: template) => {
    let styleReverse: CSS.Properties = {}
    if (reverse) {
        styleReverse = { flexDirection: 'row-reverse' }
    }

    return (
        <div className="template-wrap">
            <div style={styleReverse} className="template-container">
                <div className="template-image">
                    <img src={image} alt={''} />
                </div>
                <div className="template-title">
                    <div className="template-header">{header}</div>
                    <div className="template-description">
                        Lorem ipsum dolor sit amet, consectetur{' '}
                        <span className="white">
                            adipiscing elit. Ultrices lorem non feugiat egestas
                            amet.
                        </span>
                    </div>
                    <div className="template-category"> {category}</div>
                    <div className="template-button">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Template)
