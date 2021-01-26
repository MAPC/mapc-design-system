import React from 'react';

export interface FooterProps {
  backgroundColor?: string;
  fontColor?: string;
  paddingLeft?: number,
  paddingRight?: number,
}

export const Footer: React.FC<FooterProps> = ({
  backgroundColor,
  fontColor,
  paddingLeft = 50,
  paddingRight = 50,
  ...props
}) => (
  <footer>
    Metropolitan Area Planning Council
  </footer>
)