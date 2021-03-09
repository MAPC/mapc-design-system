import React, { useContext, useEffect } from 'react';
import { MapContext } from './Map';
import { SourceContext } from './Source';

interface LayerProps {
  layerId: string,
  type: 'fill' | 'line',
  sourceLayer: string,
  paint?: {},
}

export const Layer: React.FC<LayerProps> = ({ layerId, type, sourceLayer, paint }) => {
  const map = useContext(MapContext);
  const source = useContext(SourceContext);

  useEffect(() => {
    map?.on('load', (e) => {
      map?.on('sourcedata', (e) => {
        if (!map?.getLayer(layerId) && map?.isSourceLoaded(source)) {
          map?.addLayer({
            id: layerId,
            type,
            source,
            'source-layer': sourceLayer,
            paint,
          });
        }
      })
    });
    return () => {
      if (map?.getLayer(layerId)) {
        map?.removeLayer(layerId);
      }
    }
  }, [layerId, map, paint, source, sourceLayer, type]);
  return (<React.Fragment />)
}
