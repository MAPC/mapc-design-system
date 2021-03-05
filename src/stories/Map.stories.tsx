import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Map, MapProps } from '../components/Map';

export default {
  title: 'Maps/Basemap',
  component: Map
} as Meta;

const Template: Story<MapProps> = (args) => <Map {...args} />

export const Default = Template.bind({});
Default.args = {container: 'map', accessToken: 'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'};