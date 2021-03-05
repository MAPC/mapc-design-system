/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useRef } from 'react';
import { css, jsx } from '@emotion/react';
import mapboxgl from 'mapbox-gl';

// type MapSize = `${number}px` | `${number}%` | `${number}rem` | `${number}em` | `${number}vh` | `${number}vw`;

export interface MapProps {
  container: string,
  style: string,
  accessToken: string,
  width: string,
  height: string,
  center: [number, number],
  zoom: number,
}

export const Map: React.FC<MapProps> = ({
  container,
  style='mapbox://styles/mapbox/streets-v11',
  accessToken,
  width="700px",
  height="500px",
  center=[-70.944, 42.37],
  zoom=8.4
}) => {
  const mapRef = useRef(null);
  useEffect(() => {
    new mapboxgl.Map({
      container,
      style,
      accessToken,
      zoom,
      center
    })
  }, [mapRef, container, accessToken, width, height, style, zoom, center])
  return (
    <div
      id={container}
      ref={mapRef}
      css={css`
        height: ${height};
        width: ${width};
      `}
    />
  )
};
