import React from 'react';
import styled from 'styled-components/native';
import { Actor } from '../../store/slices/movies';

const RootStyle = styled.View`
  width: 60px;
  display: flex;
  align-items: center;  
  margin-right: 20px;
`;
const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
const Name = styled.Text`
  color: ${props => props.theme.colors.title};
  text-align: center;
`;

const Avatar: React.FC<{ actor: Actor }> = ({ actor }) => {
  const { name, profile_path } = actor;
  return (
    <RootStyle>
      <Image source={{
        uri: `https://image.tmdb.org/t/p/original/${profile_path}`
      }}
      />
      <Name>
        {name}
      </Name>
    </RootStyle>
  )
}

export default Avatar;
