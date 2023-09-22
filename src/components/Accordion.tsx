/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from 'react';
import { PropsWithChildren } from 'react';
import { css, jsx } from '@emotion/react';
import { MetrocommonTriangle } from './MetrocommonTriangle';

// Need to use an intersection type so we can use "children" props
export type AccordionProps = React.PropsWithChildren & {
  triangleColor?: string,
  title: React.ReactElement
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
  margin-top: 20px;
`;

const accordionDividerStyle = css`
  color: #fff;
  margin: 30px 0;
`;

export const Accordion: React.FC<AccordionProps> = ({ triangleColor, title, children, ...props }) => {
  const [isActive, setActive] = React.useState(false);
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
        {title}
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
