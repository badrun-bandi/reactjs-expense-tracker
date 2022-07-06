import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';
import Details from './components/main/Details';
import Main from './components/main/Main';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} alignItems="center" justifyContent='center' style={{ height: '100vh' }}>
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
    </Box>

  );
}

export default App;
