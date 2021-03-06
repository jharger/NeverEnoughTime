import * as React from 'react';
import styled from 'styled-components';

const StyledRoot = styled.main`
  font-family: IBM Plex Mono, monospace;
  font-size: 12pt;
  font-weight: 400;
  display: flex;
  justify-content: space-around;
  margin: 30px 60px;
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: ${({ grow }: { grow: number }) => grow};
  margin: 0 16px;
  flex-basis: 500px;
`;

const Label = styled.h1`
  font-size: 13pt;
  font-weight: 500;
`;

const TimeItem = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  height: 24px;
`;

const TimeName = styled.div`
  font-weight: 500;
  color: #242c34;
  flex-grow: 6;
`;

const TimeQuantity = styled.div`
  font-weight: 400;
  color: #263427;
  flex-grow: 0;
  width: 86px;
`;

export { StyledRoot, Column, Label, TimeItem, TimeName, TimeQuantity };
