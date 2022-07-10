import { createTheme, Grid as MUIGrid, styled, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import { blue, green, red } from '@mui/material/colors';
import './App.css';
import Details from './components/main/Details/Details';
import { default as MUIMain } from './components/main/Main';

const theme = createTheme();

function App() {

  const Grid = styled(MUIGrid)(({ theme }) => ({
    last: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
        paddingBottom: '200px',
      },
    },
    '& > *': {
      margin: theme.spacing(2),
    },
  }));

  const Main = styled(MUIMain)(({ theme }) => ({
      [theme.breakpoints.up('sm')]: {
        paddingBottom: '5%',
      },
  }));

  const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  }));
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Root>
          <Grid container spacing={0} alignItems="center" justifyContent='center' sx={{ h: '100vh' }}>
            <Grid item xs={12} md={3} >
              <Details title="Income" />
            </Grid>
            <Grid item xs={12} md={5}>
              <Main />
            </Grid>
            <Grid item xs={12} md={3}>
              <Details title="Expense" />
            </Grid>
          </Grid>
        </Root>
      </Box>
    </ThemeProvider>
  );
}

export default App;
