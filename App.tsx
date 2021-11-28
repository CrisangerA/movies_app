import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme, DefaultTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//---------------------------------------------------------------------------------
const styles = StyleSheet.create({
  Container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  Title: {
    fontSize: 24,
    fontWeight: '600',
  },
  Description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

type RootStackParams = {
  Home: undefined;
  Details: { movieId: number } | undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParams, 'Home'>;
const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.Title}>Hola</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details',{ movieId: 69 })}
      />
    </View>
  );
}
type DetailsProps = NativeStackScreenProps<RootStackParams, 'Details'>;
const DetailsScreen: React.FC<DetailsProps> = ({ route }) => {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mundo: {route.params?.movieId}</Text>
    </View>
  );
}

const App = () => {
  
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator<RootStackParams>();

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
