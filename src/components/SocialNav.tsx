/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { SocialIcon } from './SocialIcon';

export interface SocialNavProps {
  color: string,
}

const iconMargins = css`
  margin: 0 1rem;
`;

export const SocialNav: React.FC<SocialNavProps> = ({ color }) => (
  <nav
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <SocialIcon color={color} site="twitter" css={iconMargins} />
    <SocialIcon color={color} site="instagram" css={iconMargins} />
    <SocialIcon color={color} site="facebook" css={iconMargins} />
  </nav>
)