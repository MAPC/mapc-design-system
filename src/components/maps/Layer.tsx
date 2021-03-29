import * as React from 'react';
import { MapContext } from './Map';
import { SourceContext } from './Source';

export interface LayerProps {
  layerId: string,
  type: 'fill' | 'line',
  sourceLayer?: string,
  paint?: {},
  layout?: {},
}

export const Layer: React.FC<LayerProps> = ({ layerId, type, sourceLayer, paint={}, layout={} }) => {
  const map = React.useContext(MapContext);
  const source = React.useContext(SourceContext);

  React.useEffect(() => {
    map?.on('styledata', (e) => {
      if (!map?.getLayer(layerId) && map?.getSource(source)) {
        map?.addLayer({
          id: layerId,
          type,
          source,
          'source-layer': sourceLayer,
          paint,
          layout
        });
      };
    })
  }, [layerId, map, paint, source, sourceLayer, type, layout]);
  return (<React.Fragment />)
}
