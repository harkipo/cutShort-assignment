import {
    responsiveFontSizes,
    makeStyles
  } from '@material-ui/core/styles';
  import { lightBlue } from '@material-ui/core/colors';
  import { createTheme } from '@material-ui/core/styles';
  let theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#664de5',
      },
      secondary: lightBlue
    }
  });
  
  theme = responsiveFontSizes(theme);
  
  const useStyle = makeStyles(() => ({
    root: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
        width: 800,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3)
      }
    }
  }));
  
  export { theme, useStyle };
  