import React from 'react';
import { Story, Meta } from '@storybook/react/';
import { Footer, FooterProps } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const HousingSubmarket = Template.bind({});
HousingSubmarket.args = {
  backgroundColor: '#482C78',
};

export const ZoningAtlas = Template.bind({});
ZoningAtlas.args = {
  backgroundColor: '#00613F',
  paddingLeft: 20,
  paddingRight: 30,
}