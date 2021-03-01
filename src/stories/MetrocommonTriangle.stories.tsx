import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MetrocommonTriangle, MetrocommonTriangleProps } from '../components/MetrocommonTriangle';

export default {
  title: 'Components/Metrocommon Triangle',
  component: MetrocommonTriangle,
  argTypes: { color: { control: 'color' }}
} as Meta;

const Template: Story<MetrocommonTriangleProps> = (args) => <MetrocommonTriangle {...args} />

export const Default = Template.bind({});
Default.args = {};

export const UndefinedColor = Template.bind({});
UndefinedColor.args = {
  color: undefined,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#482C78'
};