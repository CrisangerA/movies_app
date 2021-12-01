import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation';
import { Page } from '../components';
import { Header, Title } from '../components/Details';
import { Secondary } from '../components/Text';
import { useAppSelector } from '../hooks';

type DetailsProps = NativeStackScreenProps<RootStackParams, 'Details'>;
const DetailsScreen: React.FC<DetailsProps> = ({ route }) => {
  const { poster_path, title, vote_average } = route.params.movie;  

  return (
    <Page>
      <Header image_id={poster_path} />
      <Title title={title} vote_average={vote_average} />
      <Secondary>
        Description
      </Secondary>
      <Secondary>
        Actors
      </Secondary>
      <Secondary>
        ...
      </Secondary>
      <Secondary>
        Others
      </Secondary>
    </Page>
  );
}

export default DetailsScreen;
