import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Map, MapProps } from '../components/maps/Map';
import { NavigationControl } from '../components/maps/NavigationControl';
import { MunicipalitiesMAPC } from '../components/maps/MunicipalitiesMAPC';
import { Layer } from '../components/maps/Layer';
import { Source } from '../components/maps/Source';
import { Tooltip } from '../components/maps/Tooltip';
import { MapLegend } from '../components/maps/MapLegend';
import { data } from '../assets/data/WasteWaterData';

export default {
  title: 'Maps/Basemap',
  component: Map
} as Meta;

const sewerColors = ['red', 'goldenrod', 'blue']

const Template: Story<MapProps> = (args) => <Map {...args} />
const NavTemplate: Story<MapProps> = (args) => (
  <Map {...args}>
    <NavigationControl />
  </Map>
)
const MAPCTemplate: Story<MapProps> = (args) => {
  const [muni, setMuni] = useState('');
  const onClick = (e) => {
    const clickedMuni = e.features.find(node => node.layer.id === 'MAPC Munis');
    setMuni(clickedMuni.properties.municipal || '');
  }
  console.log(muni)
  return (
    <Map
      {...args}
      onClick={onClick}
    >
      <MunicipalitiesMAPC
        type="fill"
        layerId="MAPC Munis"
        paint={{ 'fill-outline-color': 'white' }}
        data={data}
        matchOn="municipal"
        mapColumn="sewer_flag"
        colorScale={sewerColors}
        choroplethFunc={(colorScale: Array<string>, value: number|string) => {
          if (+value === 0) {
            return colorScale[0]
          } if (+value === 1) {
            return colorScale[1]
          }
          return colorScale[2]
        }}
      />
      <Source sourceId="Sewer lines" url="ihill.5wqorrqo">
        <Layer layerId="Sewer line layer" type="line" sourceLayer="MAPCSewerLines2013-9tfyjn" />
      </Source>
      <Tooltip onLayer="MAPC Munis">
        <React.Fragment>
          <p>Hello world</p>
          <p>{muni}</p>
        </React.Fragment>
      </Tooltip>
      <MapLegend
        colorScale={sewerColors}
        title="Sewer Systems"
        legendEntries={['No centralized sewer system(s)', 'Fully sewered, or nearly so', 'Partially sewered']}
      />
    </Map>
  )
}
export const Default = Template.bind({});
Default.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'};

export const MapWithNavigation = NavTemplate.bind({});
MapWithNavigation.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'};

export const MAPCLayer = MAPCTemplate.bind({});
MAPCLayer.args = {
  container: 'map',
  accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg',
};
