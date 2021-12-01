import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Theme from './src/theme';
import { RootStackParams } from './src/navigation';
import { HomeScreen, DetailsScreen } from './src/pages';
import { store } from './src/store'
//---------------------------------------------------------------------------------

const App = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Theme>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Theme>
  );
};

export default App;
