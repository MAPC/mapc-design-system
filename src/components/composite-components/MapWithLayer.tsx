import React from 'react';
import { Map, MapProps } from '../maps/Map';
import { Source }  from '../maps/Source';
import { Layer } from '../maps/Layer';

export const MapWithLayer: React.FC<MapProps> = () => (
  <Map container="map" accessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg">
    <Source sourceId="MAPC Municipalities" url="ihill.763lks2o">
      <Layer type="fill" paint={{"fill-color": 'red', "fill-outline-color": 'gray'}} sourceLayer="MAPC_borders-0im3ea" layerId="Test" />
    </Source>
  </Map>
);
