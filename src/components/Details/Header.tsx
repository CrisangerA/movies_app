import React from 'react';
import styled from 'styled-components/native';

const RootStyle = styled.View`
  width: 100%;
  heigth: 30%;  
  border-radius: 25px;
`;
const ImageStyle = styled.Image`
  width: 100%;
  height: 30%;
  resize-mode: contain;  
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
