import { createTheme } from '@material-ui/core/styles';

export const pbDarkTheme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#1F1D31',
      paper: '#0C0B13',
    },
    primary: {
      main: '#FF4E4E',
    },
    text: {
      primary: '#9390B5',
    },
  },
});
