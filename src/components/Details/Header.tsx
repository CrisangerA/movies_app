import React from 'react';
import styled from 'styled-components/native';
import { h, w } from '../../utils/dimensions';

const RootStyle = styled.View`

`;
const ImageStyle = styled.Image`
  width: ${w(100)}px;
  height: ${h(39)}px;  
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  resize-mode: cover;
`;

const Header: React.FC<{ image_id: string }> = ({ image_id }) => {
  return (
    <RootStyle>
      <ImageStyle
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${image_id}`
        }}
      />
    </RootStyle>
  )
}

export default Header;
