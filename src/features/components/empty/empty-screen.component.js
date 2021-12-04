import React from "react";
import styled from "styled-components";
import { CenteredComponent } from "../centered/centered.component";

const Empty = styled.Text``;

export const EmptyComponent = () => (
  <CenteredComponent>
    <Empty>Please select your city.</Empty>
  </CenteredComponent>
);
