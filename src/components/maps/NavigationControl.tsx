import React, { useContext, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapContext } from './Map';

interface NavigationControlProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

const navigation = new mapboxgl.NavigationControl();

export const NavigationControl: React.FC<NavigationControlProps> = ({ position = 'bottom-right' }) => {
  const map = useContext(MapContext);
  useEffect(() => {
    if (!map?.hasControl(navigation)) {
      map?.addControl(navigation, position);
    }
    return () => {
      if (map?.hasControl(navigation)) {
        map.removeControl(navigation);
      }
    }
  }, [map, position]);

  return (
    <React.Fragment />
  );
}

