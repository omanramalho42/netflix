import "styled-components";

export interface ThemeProps {
  title: 'dark' | 'light';
  colors: {
    primary: string;
    secondary: string;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}