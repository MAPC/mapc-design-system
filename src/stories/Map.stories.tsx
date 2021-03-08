import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Map, MapProps } from '../components/maps/Map';
import { MapWithNav } from '../components/composite-components/MapWithNav';
import { MapWithLayer } from '../components/composite-components/MapWithLayer';

export default {
  title: 'Maps/Basemap',
  component: Map
} as Meta;

const Template: Story<MapProps> = (args) => <Map {...args} />
const NavTemplate: Story<MapProps> = (args) => <MapWithNav {...args} />
const LayerTemplate: Story<MapProps> = (args) => <MapWithLayer {...args} />

export const Default = Template.bind({});
Default.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'};

export const MapWithNavigation = NavTemplate.bind({});

export const MapWithMAPCLayer = LayerTemplate.bind({});