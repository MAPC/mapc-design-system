import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SocialNav, SocialNavProps } from '../components/SocialNav';

export default {
  title: 'Components/Social Navigation',
  component: SocialNav,
  argTypes: {
    color: { control: 'color' },
  }
} as Meta;

const Template: Story<SocialNavProps> = (args) => <SocialNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '#00613F',
};
