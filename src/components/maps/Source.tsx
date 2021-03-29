import * as React from 'react';
import mapboxgl from 'mapbox-gl';
import { MapContext } from './Map';

export const SourceContext = React.createContext('')

interface SourceProps {
  sourceId: string,
  url: string
}

function removeLayersOnSource(map: mapboxgl.Map, source: string) {
  if (map) {
    map.getStyle().layers?.forEach((layer: mapboxgl.Layer) => {
      if (layer.source === source) {
        map?.removeLayer(layer.id)
      }
    })
  }
}

export const Source: React.FC<SourceProps> = ({ sourceId, url, children }) => {
  const map = React.useContext(MapContext);
  React.useEffect(() => {
    if (map?.loaded()) {
      map?.addSource(sourceId, {
        type: 'vector',
        url: `mapbox://${url}`
      })
    } else {
      map?.on('load', (e) => {
        map?.addSource(sourceId, {
          type: 'vector',
          url: `mapbox://${url}`
        })
      })
    }
    return () => {
      if (map?.isStyleLoaded() && map?.getSource(sourceId)) {
        removeLayersOnSource(map, sourceId)
        map?.removeSource(sourceId);
        map?.off('load', (e) => {
          map?.addSource(sourceId, {
          type: 'vector',
          url: `mapbox://${url}`
        })})
      }
    }
  }, [map, sourceId, url]);

  return (
    <SourceContext.Provider value={sourceId}>
      {children}
    </SourceContext.Provider>
  );
}
