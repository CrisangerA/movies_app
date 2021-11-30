import React from 'react';
import { FlatList, View } from 'react-native';
import Card from './Card';
import Header from './Header';
const list = [
  { name: 'Avengers: Endgame', id: '1' },
  { name: 'Avengers: Endgame', id: '2' },
  { name: 'Avengers: Endgame', id: '3' },
  { name: 'Avengers: Endgame', id: '4' },
  { name: 'Avengers: Endgame', id: '5' },
];

const TopRated: React.FC = () => {
  return (
    <View>
      <Header title='Top rated' />
      <FlatList
        data={list}
        renderItem={({ item }) => <Card movie={item.name} />}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  )
}

export default TopRated;
