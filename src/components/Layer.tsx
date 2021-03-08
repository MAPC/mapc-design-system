import React from 'react';
import { MapContext } from './Map';

interface LayerProps {
  id: string,
  type: 'fill' | 'line',
  sourceLayer: string,
  paint?: {},
  layout?: {},
}

export const Layer: React.FC<LayerProps> = ({ id, type, sourceLayer, paint, layout }) => (
  <MapContext.Consumer>
    {(value) => {
      value.map?.on('load', (e) => {
        value.map?.addLayer({
          id,
          type,
          source: 'MAPC Municipalities',
          'source-layer': sourceLayer,
          paint,
        })
      })
      return '';
    }}
  </MapContext.Consumer>
);