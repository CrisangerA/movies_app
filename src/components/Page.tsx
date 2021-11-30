import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Body = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary};
`;

const Page: React.FC = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <Body>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {children}
        </ScrollView>
      </Body>
    </SafeAreaProvider>
  );
}

export default Page;