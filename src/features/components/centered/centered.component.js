import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.View`
  flex: 8;
  align-items: center;
  justify-content: center;
`;

export const CenteredComponent = ({ children }) => (
  <LoadingContainer>{children}</LoadingContainer>
);
