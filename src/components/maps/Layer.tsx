import React from 'react';
import { MapContext } from './Map';
import { SourceContext } from './Source';

interface LayerProps {
  id: string,
  type: 'fill' | 'line',
  sourceLayer: string,
  paint?: {},
  layout?: {},
}

export const Layer: React.FC<LayerProps> = ({ id, type, sourceLayer, paint, layout }) => (
  <MapContext.Consumer>
    {(map) => (
      <SourceContext.Consumer>
        {(source) => {
          map?.on('load', (e) => {
            map?.addLayer({
              id,
              type,
              source,
              'source-layer': sourceLayer,
              paint,
            })
          })
          return '';
        }}
      </SourceContext.Consumer>
    )}
  </MapContext.Consumer>
);
