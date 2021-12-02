import { NavigationProp, useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RootStackParams } from '../../../navigation';
import { TextBody } from '../../Text';
import { Movie, setMovieSelected } from '../../../store/slices/movies';
import { useAppDispatch } from '../../../hooks';
import { View } from 'react-native';

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
  movie: Movie
}
const Card: React.FC<CardProps> = ({ movie }) => {

  const { title, vote_average, poster_path } = movie;
  const navigation = useNavigation<NavigationProp<RootStackParams, 'Details'>>();
  const dispatch = useAppDispatch();

  const handleChangePage = () => {
    dispatch(setMovieSelected(movie));
    navigation.navigate('Details', { movie: movie });
  };

  return (
    <RootStyle onTouchEnd={handleChangePage}>
      <Picture
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${poster_path}`
        }}
      />
      <TextBody numberOfLines={1} ellipsizeMode='tail'>
        {title}
      </TextBody>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <FontAwesome5 name='star' color='#FFFF00' solid />
        <FontAwesome5 name='star' color='#FFFF00' solid />
        <FontAwesome5 name='star' color='#FFFF00' solid />
        <FontAwesome5 name='star' color='#FFFF00' solid />
        <FontAwesome5 name='star' color='#808000' solid />        
      </View>
    </RootStyle>
  )
}

export default Card;
