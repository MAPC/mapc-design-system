/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useRef, useState, createContext } from 'react';
import { css, jsx } from '@emotion/react';
import mapboxgl from 'mapbox-gl';
export const MapContext = createContext<mapboxgl.Map|null>(null);
export interface MapProps {
  container: string,
  style?: string,
  accessToken: string,
  width?: string,
  height?: string,
  center?: [number, number],
  zoom?: number,
}

export const Map: React.FC<MapProps> = ({
  container,
  style='mapbox://styles/mapbox/streets-v11',
  accessToken,
  width="700px",
  height="500px",
  center=[-70.944, 42.37],
  zoom=8.4,
  children
}) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState<mapboxgl.Map|null>(null);

  useEffect(() => {
    if (!map) {
      const mapObj = new mapboxgl.Map({
        container,
        style,
        accessToken,
        zoom,
        center
      });
      setMap(mapObj);
    }
  }, [accessToken, center, style, container, zoom, mapRef, map])

  return (
    <MapContext.Provider value={map}>
      <div
        ref={mapRef}
        id={container}
        css={css`
          height: ${height};
          width: ${width};
        `}
      >
        {children}
      </div>
    </MapContext.Provider>
  )
};
