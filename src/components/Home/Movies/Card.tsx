import { NavigationProp, useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import React from 'react';
import { RootStackParams } from '../../../navigation';
import { TextBody } from '../../Text';

const RootStyle = styled.View`
  display: flex;
  align-items: flex-start;  
  width: 140px;
  margin-left: 20px;  
`;
const Picture = styled.Image`
  width: 140px;
  height: 200px;
  border-radius: 25px;
`;

interface CardProps {
  movie: string;
}

const Card: React.FC<CardProps> = ({ movie }) => {
  const navigation = useNavigation<NavigationProp<RootStackParams, 'Details'>>();
  const handleChangePage = () => navigation.navigate('Details',{ movieId: 2 });
  return (
    <RootStyle onTouchEnd={handleChangePage}>
      <Picture
        source={{ uri: 'https://m.media-amazon.com/images/I/81rypQUyjFL._SL1363_.jpg' }}
      />
      <TextBody>
        {movie}
      </TextBody>
      <TextBody>
        Starts
      </TextBody>
    </RootStyle>
  )
}

export default Card;
