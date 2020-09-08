import 'styles/components/Header.scss';

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import ThemeChooser from "components/ThemeChooser"

export default function Header({ showBack, children }) {
    return (
        <div className="colors-header">
            <div className="colors-header__wrapper">
                {showBack && (
                    <div className="colors-header__showback" onClick={() => window.history.back()}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" />
                    </div>)}
                <div className="colors-header__title">Colors</div>
                <div className="colors-header__extra">
                    {children}
                </div>
                <ThemeChooser className="colors-header__themechooser" />
            </div>
        </div>
    )
}