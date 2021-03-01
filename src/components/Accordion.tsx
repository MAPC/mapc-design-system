/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { MetrocommonTriangle } from './MetrocommonTriangle';

export interface AccordionProps {
  triangleColor?: string,
  title: string,
}

function toggleVisibility(currentState: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>) {
  if (currentState === true) {
    return setActive(false);
  }
  return setActive(true);
}

const accordionHeaderStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const h3Style = css`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  width: 45rem;
`;

const iconStyle = css`
  transition: rotate .3s ease-out;
  rotate: 0deg;
`;

const activeIconStyle = css`
  ${iconStyle}
  transition: rotate .3s ease-out;
  rotate: 90deg;
`;

const contentStyle = css`
  margin-top: 2rem;
`;

const accordionDividerStyle = css`
  color: #fff;
  margin: 3rem 0;
`;

export const Accordion: React.FC<AccordionProps> = ({ triangleColor, title, children, ...props }) => {
  const [isActive, setActive] = useState(false);
  console.log(isActive)
  return (
    <div {...props}>
      <header
        css={accordionHeaderStyle}
        onClick={() => toggleVisibility(isActive, setActive)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleVisibility(isActive, setActive);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <h3 css={h3Style}>{ title }</h3>
        <MetrocommonTriangle
          color={triangleColor}
          css={isActive ? activeIconStyle : iconStyle}
        />
      </header>
      {isActive ? <div css={contentStyle}>{children}</div> : ''}
      <hr css={accordionDividerStyle} />
    </div>
  )
};
