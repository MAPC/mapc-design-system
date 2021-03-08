import React from 'react';
import { MapContext } from './Map';

interface SourceProps {
  id: string,
  url: string
}

export const Source: React.FC<SourceProps> = ({ id, url, children }) => (
  <MapContext.Consumer>
    {(value) => {
      value.map?.on('load', (e) => {
        value.map?.addSource(id, {
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
);