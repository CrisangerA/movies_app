import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCredits } from '../../store/slices/movies';
import Avatar from './Avatar';

const Actors: React.FC = () => {

  const dispatch = useAppDispatch();
  const { movie, actors } = useAppSelector(state => state.movies.selected);

  useEffect(() => {
    dispatch(getCredits(movie?.id ?? ''))
  }, []);

  return (
    <View style={{marginBottom: 20 }}>
      <FlatList
        data={actors}
        renderItem={({ item }) => <Avatar actor={item} />}
        keyExtractor={item => item.id}
        horizontal        
      />      
    </View>
  )
}

export default Actors;
