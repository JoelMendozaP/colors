import 'styles/components/Tile.scss'

import React from 'react';
import { Link } from '@reach/router';

import { info_url } from 'helpers/router';

export const COMPACT = "compact";
export const LARGE = "large";


/**
 * @param {string} color 
 */
export function Tile({ mode=LARGE, color }) {
    return (<div className={`colors-tile colors-tile--${mode}`}>
        <div className="colors-tile__color" style={{ backgroundColor: color }}>

        </div>
        <div className="colors-tile__caption">
            {color}
        </div>
    </div>)
};

const default_colors = ['#e0ece4', '#ff4b5c', '#056674', '#66bfbf',
    '#f1f3de', '#eb8f8f', '#ec0101', '#cd0a0a', '#ffc93c', '#07689f',
    '#40a8c4', '#a2d5f2', '#ff7171', '#ffaa71', '#6e6d6d'];
/**
 * @param {String} mode;
 * @param {*} colors 
 */
export function TileSet({ mode= LARGE, colors=default_colors }) {
    return (
        <div className={`colors-tileset colors-tileset--{mode}`}>
            {colors.map((value, index) => {
                return (
                    <Link key={index} to={info_url(value)}>
                        <Tile color={value} mode={mode}/>
                    </Link>
                );
            })}
        </div>
    );
};