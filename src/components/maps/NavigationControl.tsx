import React from 'react';
import mapboxgl from 'mapbox-gl';
import { MapContext } from './Map';

interface NavigationControlProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

const navigation = new mapboxgl.NavigationControl();

export const NavigationControl: React.FC<NavigationControlProps> = ({ position = 'bottom-right' }) => (
  <MapContext.Consumer>
    {(map) => {
      if (!map?.hasControl(navigation)) {
        map?.addControl(navigation, position);
      }
      return '';
    }}
  </MapContext.Consumer>
);
