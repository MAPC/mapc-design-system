import React, { ReactElement, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { MapContext } from './Map';

interface TooltipProps {
  children: ReactElement
}

export const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  const map = useContext(MapContext);
  const div = document.createElement('div');

  useEffect(() => {
    map?.on('click', (e) => {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setDOMContent(div)
        .addTo(map)
    })

  }, [map, children, div])

  return ReactDOM.createPortal(children, div);
}