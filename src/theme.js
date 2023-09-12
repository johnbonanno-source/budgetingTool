import { ThemeOptions } from '@mui/material/styles';
import { createTheme } 
    from '@mui/material/styles';

const themeOptions = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: 
        '#dde4e5', // green: #718f94;
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
      navbar: {
        main: '#12263A;',
      },
      footer: {
        main: '#12263A;',
      },
      green: {
        main: '#718f94; ',
      },
    },
    shape: {
      borderRadius: 4,
    },
  });

  export default themeOptions;
