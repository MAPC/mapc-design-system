import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const DataTabularContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: hidden;
`;

const DataTabularContainerTopDiv = styled.div`
  width: 100%;
  padding: 0 2.75rem 0 1rem;
  background-color: #ddf4ff;
  border-radius: 5px 5px 0px 0px;
  box-sizing: border-box;
`;

const DataTabularContainerBodyDiv = styled.div`
  width: 100%;
  height: 80%;
  box-sizing: border-box;

  background-color: #b9e2ff;
  border-radius: 0px 0px 5px 5px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-right-style: solid;
  border-color: #b9e2ff;
  border-width: 0.4rem;

  padding: 1rem;

  overflow-y: scroll;
  overflow-x: hidden;

  /* width */
  &::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #68a4dd;
    border-radius: 4px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #fbfffe;
    margin: 0.1rem
    border-radius: 4px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #e2f4ff;
    
  }
`;

const DataTabularList = styled.div`
  width: 95%;
  height: 3rem;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  color: #635c7b;
  /* padding: 1.5rem; */
  justify-content: start;
  align-items: center;
`;

const DataTabularListItem = styled(DataTabularList)`
  background-color: #fbfffe;
  margin-bottom: 0.65rem;
  &:hover {
    background-color: #ddf4ff;
  }
`;

const DataTabularListAlign = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-grow: 1;
  justify-content: start;
  margin-right: 2rem;
`;

type styledWidthProps = {
  itemType?: string;
  top?: boolean;
};

const DataTabularListAlignItem = styled.div<styledWidthProps>`
  text-decoration: none;
  width: ${(props) => props.itemType};
  margin: 0 1rem;

  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: nowrap;

  &:hover {
    color: ${(props) => props.top && "#13101f"};
  }
`;

interface ViewProps {
  fields: string[];
  data: { [key: string]: number | string }[];
  searchTerm?: string | undefined;
}

export type DataSortType = {
  sortSubject: string;
  sortType: string;
};

export type elementsArray = React.ReactElement[];

export const TabularView = ({ fields, data, searchTerm }: ViewProps) => {
  const [dataElements, setDataElements] = useState<elementsArray>([]);
  const [sortMethod, setSortMethod] = useState<DataSortType>({ sortSubject: "", sortType: "asc" });

  useEffect(() => {
    function generateData() {
      // generate table data items, update table items on (new data, sort method, and search term)
      const tempArray: elementsArray = [];

      data.sort((a, b) => {
        if (sortMethod.sortType === "asc") {
          if (a[sortMethod.sortSubject] < b[sortMethod.sortSubject]) {
            return -1;
          }
          if (a[sortMethod.sortSubject] > b[sortMethod.sortSubject]) {
            return 1;
          }
          return 0;
        } else if (sortMethod.sortType === "desc") {
          if (a[sortMethod.sortSubject] < b[sortMethod.sortSubject]) {
            return 1;
          }
          if (a[sortMethod.sortSubject] > b[sortMethod.sortSubject]) {
            return -1;
          }
          return 0;
        } else if (sortMethod.sortType === "none") {
          return 0;
        }
        return 0;
      });

      data.forEach((element) => {
        // append to table if the search term is null or search term is in one of the fields
        const recordFields: elementsArray = [];

        if (
          searchTerm !== undefined &&
          (searchTerm === null ||
            searchTerm === "" ||
            Object.values(element).toString().toLowerCase().includes(searchTerm.toLowerCase()))
        ) {
          fields.forEach((field) => {
            recordFields.push(
              <DataTabularListAlignItem itemType={String((1.0 / fields.length) * 100) + "%"}>
                {element[field]}
              </DataTabularListAlignItem>
            );
          });
          tempArray.push(
            <DataTabularListItem>
              <DataTabularListAlign>{recordFields}</DataTabularListAlign>
            </DataTabularListItem>
          );
        }
      });

      if (tempArray.length === 0) {
        // if table is empty, show default item
        tempArray.push(
          <DataTabularListItem key={"default"}>
            <DataTabularListAlign>
              <DataTabularListAlignItem>
                No Items found. Please try a different filter or search term.
              </DataTabularListAlignItem>
            </DataTabularListAlign>
          </DataTabularListItem>
        );
      }

      setDataElements(tempArray);
    }

    generateData();
  }, [data, sortMethod, searchTerm, fields]);

  function setSorting(subject: string) {
    // update sorting based on clicked subject
    setSortMethod({
      sortSubject: subject,
      sortType:
        sortMethod.sortSubject === subject && sortMethod.sortType === "asc"
          ? "desc"
          : sortMethod.sortSubject === subject && sortMethod.sortType === "desc"
          ? "asc"
          : "asc",
    });
    console.log(sortMethod);
  }

  function generateTableHead() {
    const tempArray: elementsArray = [];

    fields.forEach((element) => {
      tempArray.push(
        <DataTabularListAlignItem
          itemType={String((1.0 / fields.length) * 100) + "%"}
          top
          onClick={() => {
            setSorting(element);
          }}
        >
          <strong style={{ cursor: "pointer" }}>{element}</strong>{" "}
          {sortMethod.sortSubject === element &&
            ((sortMethod.sortType === "asc" && <FontAwesomeIcon icon={faCaretUp} />) ||
              (sortMethod.sortType === "desc" && <FontAwesomeIcon icon={faCaretDown} />))}
        </DataTabularListAlignItem>
      );
    });

    return tempArray;
  }

  return (
    <div>
      <DataTabularContainerDiv>
        <DataTabularContainerTopDiv>
          <DataTabularList>
            <DataTabularListAlign>{generateTableHead()}</DataTabularListAlign>
          </DataTabularList>
        </DataTabularContainerTopDiv>
        <DataTabularContainerBodyDiv> {dataElements} </DataTabularContainerBodyDiv>
      </DataTabularContainerDiv>
    </div>
  );
};
