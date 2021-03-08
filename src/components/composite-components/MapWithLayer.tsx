import React from 'react';
import { Map, MapProps } from '../Map';
import { Source }  from '../Source';
import { Layer } from '../Layer';

export const MapWithLayer: React.FC<MapProps> = () => (
  <Map container="map" accessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg">
    <Source id="MAPC Municipalities" url="ihill.763lks2o">
      <Layer type="fill" paint={{"fill-color": 'red'}} sourceLayer="MAPC_borders-0im3ea" id="Test" />
    </Source>
  </Map>
);
