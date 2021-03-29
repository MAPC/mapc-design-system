/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/react';

export interface MapLegendProps {
  colorScale: Array<string>,
  legendEntries: Array<string>,
  title: string,
}

const legendWrapperStyle = css`
  background-color: rgba(255,255,255,0.8);
  max-width: 168px;
  min-height: 20px;
  padding: 5px 15px;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 168px;
  z-index: 10;
`;

const legendListStyle = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const legendEntryStyle = css`
  align-items: flex-start;
  color: #1f4e46;
  font-family: 'Montserrat', sans-serif;
  font-size: .75rem;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const legendTitleStyle = css`
  color: #1f4e46;
  font-family: 'Montserrat', sans-serif;
  font-size: .75rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

function setLegend(legendEntries: Array<string>, colorScale: Array<string>) {
  return legendEntries.map((entry: string, i: number) => (
    <li key={entry} css={legendEntryStyle}>
      <svg width="21" height="20" css={css`margin-right: 4px;`}>
        <rect x="2" y="2" width="16" height="16" fill={colorScale[i]} stroke="black" />
      </svg>
      <span className="map-legend__entry">{entry}</span>
    </li>
  ));
}

export const MapLegend: React.FC<MapLegendProps> = ({ legendEntries, colorScale, title, children }) => {
  const [isExpanded, setExpansion] = React.useState(true);
  return (
    <div css={legendWrapperStyle}>
      { isExpanded ? (
        <React.Fragment>
          <span css={legendTitleStyle}>{title}</span>
          <ul css={legendListStyle}>
            {setLegend(legendEntries, colorScale)}
          </ul>
          {children}
        </React.Fragment>
      ) : <span css={legendTitleStyle}>Expand Legend</span>}
      <button type="button" css={css`float: right; margin-left: 16px;`} onClick={() => setExpansion(!isExpanded)}>
        {isExpanded ? '-' : '+'}
      </button>
    </div>
  );
};
