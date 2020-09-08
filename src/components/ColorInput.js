import 'styles/components/ColorInput.scss';

import React, { useState } from 'react';
import { useNavigate } from "@reach/router"
import { info_url } from 'helpers/router';

export function ColorInput({ className, label }) {
    const [color, setColor] = useState("");
    const navigate = useNavigate();
    const showColorInfo = () => {
        if (color) {
            navigate(info_url(color));
        }
    }
    return (
        <div className={`colors-colorinput ${className}`}>
            <input className="colors-colorinput__input" value={color} onChange={(e) => setColor(e.target.value)} />
            <span className="colors-colorinput__preview" style={{backgroundColor: color}}></span>
            <button className="colors-colorinput__button" onClick={showColorInfo}>{label}</button>
        </div>
    );
}