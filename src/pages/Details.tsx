import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation';
import { Page } from '../components';
import { Actors, Header, Title } from '../components/Details';
import { Secondary } from '../components/Text';
import { View } from 'react-native';

type DetailsProps = NativeStackScreenProps<RootStackParams, 'Details'>;
const DetailsScreen: React.FC<DetailsProps> = ({ route }) => {
  const { poster_path, backdrop_path, title, vote_average, overview } = route.params.movie;

  return (
    <Page>

      <Header image_id={backdrop_path} />
      <View style={{ padding: 20 }}>
        <Title title={title} vote_average={vote_average} />

        <Secondary style={{ marginBottom: 20 }}>
          {overview}
        </Secondary>

        <Actors />

        <Secondary>
          Footer
        </Secondary>
      </View>
    </Page>
  );
}

export default DetailsScreen;
