import React from 'react';

export const Bubble = ({size = 30, color = '#cccccc', borderColor = '#000000'}) => <div style={{
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: '100%',
    borderWidth: '10px',
    borderStyle: 'solid',
    borderColor,
}}/>;