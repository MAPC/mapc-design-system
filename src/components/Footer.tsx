/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import { SocialNav } from './SocialNav';
import mapc from '../assets/images/mapc.svg';

export interface FooterProps {
  backgroundColor: string;
  fontColor: string;
  paddingLeft: number,
  paddingRight: number,
  maxWidth: number,
}

export const Footer: React.FC<FooterProps> = ({
  backgroundColor,
  fontColor = '#FFFFFF',
  paddingLeft = 50,
  paddingRight = 50,
  maxWidth = 1366,
}) => {
  const linkStyles = css`
    color: ${fontColor};
    text-decoration: none;
  `;
  return (
    <footer css={css`
      background-color: ${backgroundColor};
      width: 100%;
    `}
    >
      <div css={css`
        align-items: center;
        color: ${fontColor};
        display: flex;
        font-family: 'Calibre', sans-serif;
        font-size: 16px;
        flex-direction: row;
        justify-content: space-between;
        height: 90px;
        padding: 0 ${paddingRight}px 0 ${paddingLeft}px;
        margin: 0 auto;
        max-width: ${maxWidth};
      `}>
        <div css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}>
          <a href="https://www.mapc.org/" css={css`margin-right: 30px;`}>
            <img src={mapc} alt="MAPC logo" />
          </a>
          <span>
            <a href="https://www.mapc.org/" css={linkStyles}>
              Metropolitan Area Planning Council
            </a>
            {' '}
            |
            {' '}
            <a href="tel:617-933-0700" css={linkStyles}>
              617-933-0700
            </a>
            {' '}
            |
            {' '}
            <a href="https://metrocommon.mapc.org/" css={linkStyles}>
              metrocommon.mapc.org
            </a>
          </span>
        </div>
        <SocialNav color={fontColor} />
      </div>
    </footer>
  )
};
