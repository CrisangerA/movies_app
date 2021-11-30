import React from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation';
import { Page } from '../components';

type DetailsProps = NativeStackScreenProps<RootStackParams, 'Details'>;
const DetailsScreen: React.FC<DetailsProps> = ({ route }) => {

  return (
    <Page>
      <Text>Mundo: {route.params?.movieId}</Text>
      <Text>Mundo: asdasdasd</Text>
      <Text>Mundo: asdasdasd</Text>
      <Text>Mundo: asdasdasd</Text>
      <Text>Mundo: asdasdasd</Text>
      <Text>Mundo: asdasdasd</Text>
      <Text>Mundo: asdasdasd</Text>
    </Page>
  );
}

export default DetailsScreen;
