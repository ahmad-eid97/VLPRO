// IMPORTING ROUTES
import AllRoutes from './allRoutes/AllRoutes';

// MATERIAL STUFF
import { ThemeProvider, createTheme } from '@mui/material/styles';

// GLOBAL STYLES FILE
import './global.scss';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans'
    ].join(','),
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AllRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
