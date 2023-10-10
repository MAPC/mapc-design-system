import React, { MutableRefObject } from "react";
import styled from "styled-components";
import Overlay from "react-bootstrap/Overlay";
import Button from "react-bootstrap/Button";

const OverlayDiv = styled.div`
  background-color: ${(props) => (props.theme.backgroundColor !== undefined ? props.theme.backgroundColor : "#e7f0f3")};
  width: 20vw;
  height: 85vh;
  position: absolute !important;
  top: 0.75rem !important;
  right: 5rem !important;

  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 0px
    ${(props) =>
      props.theme.tertiaryColor !== undefined
        ? props.theme.tertiaryColor
        : props.theme.primaryColor !== undefined
        ? props.theme.primaryColor
        : "#2b3b5e"};
  font-size: 1.25rem;
`;

const OverlayTitle = styled.h4`
  color: ${(props) =>
    props.theme.secondaryColor !== undefined
      ? props.theme.secondaryColor
      : props.theme.primaryColor !== undefined
      ? props.theme.primaryColor
      : "#635c7b"};
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin: 0;
`;

const OverlayStyleBar = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.theme.secondaryColor !== undefined
      ? props.theme.secondaryColor
      : props.theme.primaryColor !== undefined
      ? props.theme.primaryColor
      : "#c3d8e8"};
  height: 0.15rem;
`;

const OverlayUl = styled.ul`
  padding: 0;
  margin: 0;
`;
const OverlayLi = styled.li`
  text-decoration: none;
  margin: 1rem 0;
  list-style: none;
  font-weight: bold;
  text-wrap: none;
  padding: 0.5rem;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) =>
      props.theme.secondaryColor !== undefined
        ? props.theme.secondaryColor
        : props.theme.primaryColor !== undefined
        ? props.theme.primaryColor
        : "#c7e3f0"};
  }
`;

const OverlayAnchor = styled.div`
  text-decoration: none;
  color: ${(props) =>
    props.theme.tertiaryColor !== undefined
      ? props.theme.tertiaryColor
      : props.theme.primaryColor !== undefined
      ? props.theme.primaryColor
      : "#7e7697"};
  &:hover {
    color: ${(props) =>
      props.theme.tertiaryColor !== undefined
        ? props.theme.tertiaryColor
        : props.theme.primaryColor !== undefined
        ? props.theme.primaryColor
        : "#4d475f"};
  }
`;

const NavLink = styled.a`
  text-decoration: none;
`;

interface DropdownProps {
  show?: boolean;
  name?: string;
  links?: object;
  logout?: boolean;
  logoutFunction: () => void;
  target: MutableRefObject<HTMLDivElement> | undefined;
  theme?: { backgroundColor: string; primaryColor: string; secondaryColor: string; tertiaryColor: string };
}

export const UserDropdown = ({
  show = false,
  name = "",
  links = { "": "" },
  logout = false,
  logoutFunction,
  target,
  theme,
}: DropdownProps) => {
  function generateLinks() {
    const tempArray: React.ReactElement[] = [];

    Object.keys(links).forEach((element: string) => {
      tempArray.push(
        <OverlayLi key={element} theme={theme}>
          <NavLink href={links[element as keyof object]}>
            <OverlayAnchor theme={theme}> {element} </OverlayAnchor>
          </NavLink>
        </OverlayLi>
      );
    });

    return tempArray;
  }
  return (
    <Overlay
      target={target !== undefined ? target.current : null}
      show={show}
      placement="bottom"
      rootClose
      transition={false}
    >
      {({
        placement: _placement,
        arrowProps: _arrowProps,
        show: _show,
        popper: _popper,
        hasDoneInitialMeasure: _hasDoneInitialMeasure,
        ...props
      }) => (
        <OverlayDiv {...props} theme={theme}>
          <OverlayTitle theme={theme}>{name}</OverlayTitle>
          <OverlayStyleBar theme={theme} />
          <OverlayUl>{generateLinks()}</OverlayUl>
          {logout && (
            <Button
              onClick={() => {
                logoutFunction();
              }}
              style={{ backgroundColor: theme?.primaryColor }}
            >
              Logout
            </Button>
          )}
        </OverlayDiv>
      )}
    </Overlay>
  );
};
