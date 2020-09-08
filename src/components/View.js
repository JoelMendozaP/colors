import 'styles/components/View.scss'

import React from 'react';
import { useSelector } from 'react-redux';
import { currentTheme } from 'models/theme';

import Header from 'components/Header';
import { ColorInput } from './ColorInput';

/**
 * 
 * @param {Boolean} showBack
 * @param {String} className
 * @param {*} children
 */
export default function View({showBack, className, children}) {
    let theme = useSelector(currentTheme);
    return (<div className={`colors-view colors-${theme}-theme ${className}`}>
        <Header showBack={showBack}>
            <ColorInput className="colors-view-colorinput" label="Analizar"/>
        </Header>
        <div className="colors-view__scrollview">
            <div className="colors-view__content">{children}</div>
        </div>
    </div>)
}