import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation';
import { Page } from '../components';
import { Header, Movies } from '../components/Home';

type HomeProps = NativeStackScreenProps<RootStackParams, 'Home'>;
const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  
  return (
    <Page>      
      <Header />
      <Movies />
    </Page>
  );
}

export default HomeScreen;
