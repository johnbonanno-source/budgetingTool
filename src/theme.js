import { ThemeOptions } from '@mui/material/styles';
import { createTheme } 
    from '@mui/material/styles';

const themeOptions = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#718F94',
      },
      secondary: {
        main: '#545775',
      },
      info: {
        main: '#90B494',
      },
      lightBlue: {
        main:'#dde4e5;',
      },
      grey: {
        main: '#ECE6D5',
      },
      olive: {
        main: '#BFC8AD',
      },
      success: {
        main: '#426146',
      },
      warning: {
        main: '#CA5310',
      },
      error: {
        main: '#8F250C',
      },
    },
    shape: {
      borderRadius: 4,
    },
  });

  export default themeOptions;
