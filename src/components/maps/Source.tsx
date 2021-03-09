import React, { createContext, useContext, useEffect } from 'react';
import { MapContext } from './Map';

export const SourceContext = createContext('')

interface SourceProps {
  sourceId: string,
  url: string
}

export const Source: React.FC<SourceProps> = ({ sourceId, url, children }) => {
  const map = useContext(MapContext);

  useEffect(() => {
    map?.on('load', (e) => {
      map?.addSource(sourceId, {
        type: 'vector',
        url: `mapbox://${url}`
      })
    })
    return () => {
      if (map?.isSourceLoaded(sourceId)) {
        map?.removeSource(sourceId);
      }
    }
  }, [map, sourceId, url]);

  return (
    <SourceContext.Provider value={sourceId}>
      {children}
    </SourceContext.Provider>
  );
}
