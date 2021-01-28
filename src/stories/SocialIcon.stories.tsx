import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SocialIcon, SocialIconProps } from '../components/SocialIcon';

export default {
  title: 'Components/Social Icons',
  component: SocialIcon,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<SocialIconProps> = (args) => <SocialIcon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  color: '#00613F',
  site: 'facebook',
};


export const Twitter = Template.bind({});
Twitter.args = {
  color: '#00613F',
  site: 'twitter',
};

export const Instagram = Template.bind({});
Instagram.args = {
  color: '#00613F',
  site: 'instagram',
};
