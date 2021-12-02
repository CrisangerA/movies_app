import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Recomended from './Recomended';
import TopRated from './TopRated';

const RootStyle = styled.View`
  border-radius: 25px;
  margin-top: 220px;
  background-color: ${props => props.theme.colors.secondary};
  padding-vertical: 10px;
`;

const Movies: React.FC = () => {
  return (
    <RootStyle>
      <Recomended />
      <TopRated />
    </RootStyle>
  )
}

export default Movies;
