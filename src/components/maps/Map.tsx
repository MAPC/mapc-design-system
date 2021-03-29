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
  minZoom?: number,
  maxZoom?: number,
  onClick?: (e: (mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] | undefined; } & mapboxgl.EventData)) => void,
}

export const Map: React.FC<MapProps> = ({
  container,
  style='mapbox://styles/mapbox/streets-v11',
  accessToken,
  width="700px",
  height="500px",
  center=[-70.944, 42.37],
  zoom=8.4,
  minZoom=8,
  maxZoom=16,
  onClick,
  children
}) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState<mapboxgl.Map|null>(null)
  useEffect(() => {
    if (!map) {
      let mapObj = new mapboxgl.Map({
        container,
        style,
        accessToken,
        zoom,
        center,
        maxZoom,
        minZoom,
      });
      setMap(mapObj)
    }
    return () => {
      if (map) {
        map?.remove();
        setMap(null);
      }
    }
  }, [map, minZoom, maxZoom, center, style, accessToken, zoom, container])

  useEffect(() => {
    if (map && onClick) {
      map.on('click', (e) => {
        e.features = map.queryRenderedFeatures([e.point.x, e.point.y])
        return onClick(e);
      });
    }
  }, [map, onClick])

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
