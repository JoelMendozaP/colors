import 'styles/components/ThemeChooser.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle, currentTheme } from 'models/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function ThemeChooser({ className }) {
    const dispatch = useDispatch();
    const theme = useSelector(currentTheme);

    return (
        <div className={`colors-theme-chooser ${className}`} onClick={() => dispatch(toggle())}>
            <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} size="lg" />
        </div>
    )
}