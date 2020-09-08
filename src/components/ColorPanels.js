import React from 'react';
import Color from 'color';
import { TileSet, COMPACT } from './Tile';

function produce_colors(color, fn){
    let c = Color(color);
    const result = [c.hex()];
    for(let i = 1; i < 11; i++){
        result.push(fn.call(c, i/10).hex());
    }
    return result;
}

export function Shades({color}){    
    return (
        <TileSet mode={COMPACT} colors={produce_colors(color, Color.prototype.darken)}/>
    );
}

export function Tint({color}){    
    return (
        <TileSet mode={COMPACT} colors={produce_colors(color, Color.prototype.whiten)}/>
    );
}

export function Complementary({color}){    
    return (
        <TileSet mode={COMPACT} colors={[color, Color(color).rotate(180).hex()]}/>
    );
}

export function Triadic({color}){    
    return (
        <TileSet mode={COMPACT} colors={[color, Color(color).rotate(120).hex(), Color(color).rotate(240).hex()]}/>
    );
}

export function Analogous({color}){    
    return (
        <TileSet mode={COMPACT} colors={[color, Color(color).rotate(30).hex(), Color(color).rotate(330).hex()]}/>
    );
}