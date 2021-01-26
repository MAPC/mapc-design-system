/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react'
import mapc from './../assets/images/mapc.svg';

export interface FooterProps {
  backgroundColor?: string;
  fontColor?: string;
  paddingLeft?: number,
  paddingRight?: number,
}

export const Footer: React.FC<FooterProps> = ({
  backgroundColor,
  fontColor = '#FFFFFF',
  paddingLeft = 50,
  paddingRight = 50,
  ...props
}) => (
  <footer css={css`
    align-items: center;
    background-color: ${backgroundColor};
    color: ${fontColor};
    display: flex;
    font-family: 'Calibre', sans-serif;
    font-size: 16px;
    flex-direction: row;
    height: 90px;
    padding: 0 ${paddingRight}px 0 ${paddingLeft}px;
  `}>
      <a href="https://www.mapc.org/">
        <img src={mapc} alt="MAPC logo" />
      </a>
      <span>
        <a href="https://www.mapc.org/">Metropolitan Area Planning Council</a>
        {' '}
        |
        {' '}
        <a href="tel:617-933-0700">617-933-0700</a>
        {' '}
        |
        {' '}
        <a href="https://metrocommon.mapc.org/">metrocommon.mapc.org</a>
      </span>
    <nav className="footer__navigation">
      <a href="https://twitter.com/MAPCMetroBoston">
        <i className="fab fa-twitter icon__social" />
      </a>
      <a href="https://www.instagram.com/mapcmetroboston/">
        <i className="fab fa-instagram icon__social" />
      </a>
      <a href="https://www.facebook.com/MAPCMetroBoston">
        <i className="fab fa-facebook-square icon__social" />
      </a>
    </nav>
  </footer>
);
