// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      title: string;
      primary: string;
      secondary: string;
      white: string;
      grey: string;
    };
  }
}