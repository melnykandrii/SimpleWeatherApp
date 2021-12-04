import React from "react";
import styled from "styled-components";
import { CenteredComponent } from "../centered/centered.component";

const Loading = styled.ActivityIndicator``;

export const LoadingState = () => (
  <CenteredComponent>
    <Loading size="large" color="black" />
  </CenteredComponent>
);
