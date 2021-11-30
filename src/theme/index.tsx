import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
// ---------------------------------------------------
import darkTheme from './dark';
import lighTheme from './light';
import { sharedColors } from './colors';

const Theme: React.FC = ({ children }) => {
  //const isDarkMode = useColorScheme() === 'dark';
  const themeSelected = useColorScheme() === 'dark' ? darkTheme : lighTheme;

  themeSelected.colors = {
    ...themeSelected.colors,
    ...sharedColors
  }
  
  return (
    <ThemeProvider theme={themeSelected}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;


