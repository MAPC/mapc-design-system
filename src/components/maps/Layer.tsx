import React, { useContext, useEffect } from 'react';
import { MapContext } from './Map';
import { SourceContext } from './Source';

export interface LayerProps {
  layerId: string,
  type: 'fill' | 'line',
  sourceLayer?: string,
  paint?: {},
}

export const Layer: React.FC<LayerProps> = ({ layerId, type, sourceLayer, paint }) => {
  const map = useContext(MapContext);
  const source = useContext(SourceContext);
  useEffect(() => {
    map?.on('styledata', (e) => {
      if (!map?.getLayer(layerId) && map?.getSource(source)) {
        map?.addLayer({
          id: layerId,
          type,
          source,
          'source-layer': sourceLayer,
          paint,
        });
      };
    })
  }, [layerId, map, paint, source, sourceLayer, type]);
  return (<React.Fragment />)
}
