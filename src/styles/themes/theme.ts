type Grayscales = {
  dark: string[];
  light: string[];
};

type Colors = {
  primary: string;
  bg: string[];
  text: string[];
  grayscales: Grayscales;
};

export interface styleTheme {
  color: Colors;
}

const DefaultTheme: styleTheme = {
  color: {
    primary: '#0f4c81',
    bg: ['#fff', '#f6f8ff'],
    text: ['#333', '#4A4F57', '#868E96', '#dcdcdc'],
    grayscales: {
      dark: ['#12171f', '#161a23', '#181c27', '#1f2330', '#252836', '#303645'],
      light: ['#ffffff', '#e6ecf8', '#9ba4b7', '#6d7484', '#404655'],
    },
  },
};

export const DarkTheme: styleTheme = {
  color: {
    ...DefaultTheme.color,
    primary: '#fff46a',
    bg: ['#303437', '#232326'],
    text: ['#f2f4f7', '#e6ecf8', '#9ba4b7', '#515151'],
  },
};

export default DefaultTheme;
