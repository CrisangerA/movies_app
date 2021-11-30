import React from 'react';
import { View } from 'react-native';
import Recomended from './Recomended';
import TopRated from './TopRated';


const Movies: React.FC = () => {
  return (
    <View>
      <Recomended />
      <TopRated />
    </View>
  )
}

export default Movies;
