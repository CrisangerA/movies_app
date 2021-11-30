import React from 'react';
import styled from 'styled-components/native';
import { Secondary, Subtitle } from '../../Text';

const HeaderStyles = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-horizontal: 20px;
`;

const Header: React.FC<{ title: string }> = ({ title }) => (
  <HeaderStyles>
    <Subtitle>
      {title}
    </Subtitle>
    <Secondary>
      See all
    </Secondary>
  </HeaderStyles>
)

export default Header;
