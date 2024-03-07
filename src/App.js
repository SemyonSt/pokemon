import './App.css';
import Main from './pages/Main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

const App = () => (
    <ThemeProvider theme={theme}>
        <Main />
    </ThemeProvider>
);

export default App;
