import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  flex: 1;
`;
const Search = styled(Searchbar)`
  margin-horizontal: 5px;
  margin-vertical: 5px;
`;

export const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext);

  const [searchLocation, setSearchLocation] = useState(keyword);

  useEffect(() => {
    setSearchLocation(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Search
        placeholder="Search for the locations"
        value={searchLocation}
        onChangeText={(text) => {
          setSearchLocation(text);
        }}
        onSubmitEditing={() => {
          search(searchLocation);
        }}
      />
    </SearchContainer>
  );
};
