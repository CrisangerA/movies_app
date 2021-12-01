import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const RootStyle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Left = styled.View`
  display:flex;
  align-items: flex-start;
`;
const Right = styled.View`
  display:flex;
  align-items: flex-end;
`;
const Name = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.theme.colors.title}
`;

const Title: React.FC<{ title: string, vote_average: number }> = ({ title, vote_average }) => {
  return (
    <RootStyle>
      <Left>
        <Name>
          {title}
        </Name>
        <Text>Watch now</Text>
      </Left>

      <Right>
        <Text>Cosa 4k</Text>
        <Text>{vote_average}</Text>
      </Right>      
    </RootStyle>
  )
}

export default Title;
