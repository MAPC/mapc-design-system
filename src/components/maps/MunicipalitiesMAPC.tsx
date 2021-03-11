import React, { useEffect, useState } from 'react';
import { Source } from './Source';
import { Layer, LayerProps } from './Layer';

interface MuniMAPCProps extends LayerProps {
  data: Array<{}>,
  matchOn: string,
  mapColumn: string,
  colorScale: Array<string>,
  choroplethFunc: (colorScale: Array<string>, value: string|number) => string,
}

export const MunicipalitiesMAPC: React.FC<MuniMAPCProps> = ({ type, layerId, paint, data, colorScale, choroplethFunc, matchOn, mapColumn }) => {
  const [choropleth, setChoropleth] = useState<Array<string|Array<string>>>([]);
  useEffect(() => {
    if (data) {
      const choroplethTemp = ['match', ['get', 'municipal']]
      data.forEach((row: Record<typeof matchOn | typeof mapColumn, string>) => {
        choroplethTemp.push(row[matchOn], row[mapColumn] ? choroplethFunc(colorScale, row[mapColumn]) : 'gray')
      })
      choroplethTemp.push('gray')
      setChoropleth(choroplethTemp);
    }
  }, [choroplethFunc, colorScale, data, mapColumn,matchOn])
  return (
    <Source sourceId="MAPC Municipalities" url="ihill.763lks2o">
      <Layer type={type} paint={{ ...paint, 'fill-color': choropleth }} sourceLayer="MAPC_borders-0im3ea" layerId={layerId} />
    </Source>
  );
}
