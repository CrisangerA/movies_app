import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import Card from './Card';
import Header from './Header';
import { getRecomended } from '../../../store/slices/movies';
import { useAppDispatch, useAppSelector } from '../../../hooks';

const Recomended: React.FC = () => {

  const { loaded, movies } = useAppSelector((state) => state.movies.recomended);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !loaded && movies.length === 0 && dispatch(getRecomended());
  }, []);

  return (
    <View>
      <Header title='Recommended for you' />
      <FlatList
        data={movies}
        renderItem={({ item }) => <Card movie={item} />}
        keyExtractor={item => item.id}
        horizontal
        onMomentumScrollEnd={(e) => {
          //const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
          // const isEndScroll = ({ layoutMeasurement, contentOffset, contentSize }) =>
          //   layoutMeasurement.width + contentOffset.x >= contentSize.width;
          // if (isEndScroll(e.nativeEvent)) {
          //   console.log("Fetch movies")
          // }
        }}
      />
    </View>
  )
}

export default Recomended;
