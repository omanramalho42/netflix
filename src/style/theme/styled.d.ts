import "styled-components";

export interface ThemeProps {
  title: 'dark' | 'light';
  colors: {
    primary: string;
    secondary: string;

    header: string;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark' | 'light';
    colors: {
      primary: string;
      secondary: string;

      header: string;

      effect_shadow: string;
      effect: string;
    }
  }
}