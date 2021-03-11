import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Map, MapProps } from '../components/maps/Map';
import { NavigationControl } from '../components/maps/NavigationControl';
import { MunicipalitiesMAPC } from '../components/maps/MunicipalitiesMAPC';
import { MapLegend } from '../components/maps/MapLegend';
import { data } from '../assets/WasteWaterData';

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
const MAPCTemplate: Story<MapProps> = (args) => (
  <Map {...args}>
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
    <MapLegend
      colorScale={sewerColors}
      title="Sewer Systems"
      legendEntries={['No centralized sewer system(s)', 'Fully sewered, or nearly so', 'Partially sewered']}
    />
  </Map>
)

export const Default = Template.bind({});
Default.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'};

export const MapWithNavigation = NavTemplate.bind({});
MapWithNavigation.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'};

export const MAPCLayer = MAPCTemplate.bind({});
MAPCLayer.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'};
