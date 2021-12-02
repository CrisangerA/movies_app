import React from 'react';
import styled from 'styled-components/native';
import Search from './Search';
import { Title } from '../../Text';

// --------------------------
const HeaderStyle = styled.View`
  position: absolute;
  z-index: -1;
  display: flex;
  flex: 1;
  alignItems: center;
  padding: 40px 40px;
  background-color: ${props => props.theme.colors.primary};  
`;

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Title>
        Hello, what do you want to watch?
      </Title>
      <Search />
      
    </HeaderStyle>
  );
}
export default Header;