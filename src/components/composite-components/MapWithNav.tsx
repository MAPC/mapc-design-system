import React from 'react';
import { Map, MapProps } from '../maps/Map';
import { NavigationControl } from '../maps/NavigationControl';

export const MapWithNav: React.FC<MapProps> = () => (
  <Map container="map" accessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg">
    <NavigationControl />
  </Map>
);
