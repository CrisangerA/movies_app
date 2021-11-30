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

const Recomended: React.FC = () => {
  return (
    <View>
      <Header title='Recommended for you' />
      <FlatList
        data={list}
        renderItem={({ item }) => <Card movie={item.name} />}
        //ItemSeparatorComponent={({  }) => <View style={{ width: '20px' }} />}
        keyExtractor={item => item.id}
        horizontal
        onMomentumScrollEnd={(e) => {
          //const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
          //console.log("ENd scriolkkk: ", layoutMeasurement, contentOffset, contentSize )          
          //console.log(layoutMeasurement.width, contentOffset.x, contentSize.width)
          //console.log(layoutMeasurement.width + contentOffset.x >= contentSize.width)

          const isEndScroll = ({ layoutMeasurement, contentOffset, contentSize }) =>
            layoutMeasurement.width + contentOffset.x >= contentSize.width;

          if (isEndScroll(e.nativeEvent)) {
            console.log("Fetch movies")
          }
        }}
      />
    </View>
  )
}

export default Recomended;
