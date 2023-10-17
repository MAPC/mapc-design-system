import { instanceOf } from "prop-types";
import React, { useRef, useState, useEffect } from "react";

import styled from "styled-components";

// in-js styling
const Nav = styled.div`
  background-color: ${(props) => (props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "#efefe7")};
  color: ${(props) =>
    props.theme.tertiaryColor !== undefined
      ? props.theme.tertiaryColor
      : props.theme.primaryColor !== undefined
      ? props.theme.primaryColor
      : "#00332d"};
  height: 1.5rem;
  /* margin-bottom: 1rem; */
  padding: 1rem 1.5rem 1.65rem;
`;

const Title = styled.div`
  color: ${(props) => (props.theme.backgroundColor !== undefined ? props.theme.backgroundColor : "#00332d")};
  font-weight: bold;
  font-size: 1.75rem;
  position: absolute;
  /* padding-left: 1rem; */
`;

const NavLinks = styled.div`
  float: right;
  padding: 0.45rem 0.65rem;
  margin-right: 0.35rem;
  color: ${(props) => (props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "#00332d")};
  background-color: ${(props) => (props.theme.backgroundColor !== undefined ? props.theme.backgroundColor : "#efefe7")};
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => (props.theme.primaryColor !== undefined ? props.theme.primaryColor : "#dddcd1")};
  }
`;

// props type styping, themes
interface theme {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

interface props {
  title?: React.ReactNode | string;
  links?: React.ReactNode | string[];
  theme?: theme;
  buttonLinks?: boolean;
}

function Header({ title, links, theme, buttonLinks = false }: props) {
  function generateLinks(items: React.ReactNode | string[]) {
    if (React.isValidElement(items)) {
      return items;
    } else {
      if (Array.isArray(items) && items !== undefined && items !== null && theme !== undefined) {
        const tempArray: React.ReactNode[] = [];
        items.forEach((element) => {
          // if buttonLinks is true, then make buttons transparent
          if (buttonLinks) {
            tempArray.unshift(
              <NavLinks theme={theme}>
                <strong>{element}</strong>
              </NavLinks>
            );
          } else {
            const proxyTheme: theme = { ...theme };
            proxyTheme.tertiaryColor = theme.backgroundColor;
            proxyTheme.backgroundColor = theme.tertiaryColor;
            proxyTheme.primaryColor = theme.tertiaryColor;
            tempArray.unshift(
              <NavLinks theme={proxyTheme}>
                <strong>{element}</strong>
              </NavLinks>
            );
          }
        });
        return tempArray;
      }
    }
  }
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: theme?.backgroundColor,
      }}
    >
      <Nav theme={theme}>
        <Title theme={theme}>{title}</Title>
        {generateLinks(links)}
      </Nav>
    </div>
  );
}

export default Header;
