import React from 'react';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { w } from '../../../utils/dimensions';

const RootStyle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  background-color: ${props => props.theme.colors.white};
  border-radius: 25px;  
  opacity: 0.5;
  margin-bottom: 25px;
`;
const SearchStyle = styled.TextInput`  
  width: ${w(80)};
  color: ${props => props.theme.colors.white};  
  padding-horizontal: 20px;
  padding-vertical: 10px;
`;

const Search: React.FC = () => {
  return (
    <RootStyle>
      <FontAwesome5 name='search' color='white' solid style={{ marginLeft: 20 }} />
      <SearchStyle
        placeholder='Search'
        placeholderTextColor='#fff'
      />
    </RootStyle>
  );
}
export default Search;