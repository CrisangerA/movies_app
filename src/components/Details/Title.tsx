import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const RootStyle = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Left = styled.View`
  display:flex;
  flex: 2;
  align-items: flex-start;
`;
const Right = styled.View`
  display:flex;
  flex: 1;
  align-items: flex-end;
`;
const Name = styled.Text`
  font-size: 26px;
  font-weight: 700;
  color: ${props => props.theme.colors.title}
  margin-bottom: 20px;
`;
const Button = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: ${props => props.theme.colors.grey};
  opacity: 0.5;
  padding-vertical: 10px;
  padding-horizontal: 15px;
`;
const TextButton = styled.Text`  
  font-weight: 700;
  color: ${props => props.theme.colors.title};
  text-transform: uppercase;
`;
const Title: React.FC<{ title: string, vote_average: number }> = ({ title, vote_average }) => {
  return (
    <RootStyle>
      <Left>
        <Name>
          {title}
        </Name>
        <Button>
          <TextButton>Watch now</TextButton>
        </Button>
      </Left>

      <Right>
        <Text>{vote_average}</Text>        
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name='star' color='#FFFF00' solid />
          <FontAwesome5 name='star' color='#FFFF00' solid />
          <FontAwesome5 name='star' color='#FFFF00' solid />
          <FontAwesome5 name='star' color='#FFFF00' solid />
          <FontAwesome5 name='star' color='#808000' solid />
        </View>
      </Right>
    </RootStyle>
  )
}

export default Title;
