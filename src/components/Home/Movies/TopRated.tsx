import React from 'react';
import { FlatList, View } from 'react-native';
import { useAppSelector } from '../../../hooks';
import Card from './Card';
import Header from './Header';

const TopRated: React.FC = () => {
  const { loaded, movies } = useAppSelector((state) => state.movies.recomended);
  return (
    <View>
      <Header title='Top rated' />
      <FlatList
        data={movies}
        renderItem={({ item }) => <Card movie={item} />}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  )
}

export default TopRated;
