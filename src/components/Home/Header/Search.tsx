import React from 'react';
import styled from 'styled-components/native';

const RootStyle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  background-color: ${props => props.theme.colors.white};
  border-radius: 25px;  
  opacity: 0.5;  
`;
const SearchStyle = styled.TextInput`  
  width: 100%;
  color: ${props => props.theme.colors.white};  
  padding: 10px;
`;

const Search: React.FC = () => {
  return (
    <RootStyle>
      <SearchStyle
        placeholder='Search'
        placeholderTextColor='#fff'        
      />
    </RootStyle>
  );
}
export default Search;