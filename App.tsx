import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Theme from './src/theme';
import { RootStackParams } from './src/navigation';
import { HomeScreen, DetailsScreen } from './src/pages';

//---------------------------------------------------------------------------------

const App = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Theme>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false  }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Theme>
  );
};

export default App;
