/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { Logo, LogoProps } from '../components/Logo';

export default {
  title: 'Components/MAPC Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} css={css`width: 150px; background-color: #78BE20`} />

export const SemiTransparent = Template.bind({});
SemiTransparent.args = { style: 'semitransparent' };

export const Duotone = Template.bind({});
Duotone.args = { style: 'duotone' };

export const FullColor = Template.bind({});
FullColor.args = { style: 'fullcolor' };