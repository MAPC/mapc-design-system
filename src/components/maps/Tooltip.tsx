import * as React from 'react';
import * as mapboxgl from 'mapbox-gl';
import { MapContext } from './Map';

interface TooltipProps {
  onLayer?: string|undefined,
  children: React.ReactElement,
}

export const Tooltip: React.FC<TooltipProps> = ({ onLayer, children }) => {
  const map = React.useContext(MapContext);
  const div = document.createElement('div');

  React.useEffect(() => {
    if (onLayer) {
      map?.on('click', onLayer, (e) => {
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setDOMContent(div)
          .addTo(map)
      })
    } else {
      map?.on('click', (e) => {
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setDOMContent(div)
          .addTo(map)
      })
    }

  }, [map, children, div, onLayer])

  return <div />
}