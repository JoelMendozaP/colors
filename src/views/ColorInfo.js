import 'styles/views/ColorInfo.scss';

import React from 'react';
import Color from 'color';
import View from 'components/View';
import { Shades, Tint, Complementary, Triadic, Analogous } from 'components/ColorPanels';

export default function ColorInfo({color}) {
    const fcolor = Color(decodeURIComponent(color)).hex();
    return (
        <View showBack={true}>
            <h3>Analogous Colors</h3>
            <Analogous  color={fcolor}/>/>
            <h3>Triadic Colors</h3>
            <Triadic color={fcolor}/>
            <h3>Complementary Color</h3>
            <Complementary color={fcolor}/>
            <h3>Shades of {fcolor}</h3>
            <Shades color={fcolor} />
            <h3>Tints of {fcolor}</h3>
            <Tint color={fcolor} />
        </View>
    );
}