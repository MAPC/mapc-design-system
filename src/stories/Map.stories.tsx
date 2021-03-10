import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Map, MapProps } from '../components/maps/Map';
import { NavigationControl } from '../components/maps/NavigationControl';
import { MunicipalitiesMAPC } from '../components/maps/MunicipalitiesMAPC';

export default {
  title: 'Maps/Basemap',
  component: Map
} as Meta;

const Template: Story<MapProps> = (args) => <Map {...args} />
const NavTemplate: Story<MapProps> = (args) => (
  <Map {...args}>
    <NavigationControl />
  </Map>
)
const MAPCTemplate: Story<MapProps> = (args) => (
  <Map {...args}>
    <MunicipalitiesMAPC type="fill" layerId="MAPC Munis" paint={{ 'fill-color': 'purple', 'fill-outline-color': 'black' }} />
  </Map>
)

export const Default = Template.bind({});
Default.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'};

export const MapWithNavigation = NavTemplate.bind({});
MapWithNavigation.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'};

export const MAPCLayer = MAPCTemplate.bind({});
MAPCLayer.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg', style: 'mapbox://styles/ihill/ckcnnn63u26o11ip2qf4odwyp'};
