import React from 'react';
import { Source } from './Source';
import { Layer, LayerProps } from './Layer';

export const MunicipalitiesMAPC: React.FC<LayerProps> = ({ type, layerId, paint }) => (
  <Source sourceId="MAPC Municipalities" url="ihill.763lks2o">
    <Layer type={type} paint={paint} sourceLayer="MAPC_borders-0im3ea" layerId={layerId} />
  </Source>
);
