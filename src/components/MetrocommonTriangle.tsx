import React from 'react';

export interface MetrocommonTriangleProps {
  color: string|undefined,
}

export const MetrocommonTriangle: React.FC<MetrocommonTriangleProps> = ({ color='#78BE20', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21.176" viewBox="0 0 20 21.176" role="img" aria-labelledby="triangleTitle" {...props}>
    <title id="triangleTitle">Decorative triangle</title>
    <path id="Polygon_10" data-name="Polygon 10" d="M10.588,0,21.176,20H0Z" transform="translate(20) rotate(90)" fill={color}/>
  </svg>
);