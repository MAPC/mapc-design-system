import React, { createContext } from 'react';
import { MapContext } from './Map';

export const SourceContext = createContext('')

interface SourceProps {
  id: string,
  url: string
}

export const Source: React.FC<SourceProps> = ({ id, url, children }) => (
  <SourceContext.Provider value={id}>
    <MapContext.Consumer>
      {(map) => {
        map?.on('load', (e) => {
          map?.addSource(id, {
            type: 'vector',
            url: `mapbox://${url}`,
          })
        })
        return (
          <React.Fragment>
            {children}
          </React.Fragment>
        );
      }}
    </MapContext.Consumer>
  </SourceContext.Provider>
);