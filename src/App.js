
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from './components/HeroSection';
import Blog from './components/Blog';
import Footer from './components/footer';
import Pages from './Pages/pages';
import Email from './components/Email';
import AboutUs from './Pages/AboutUs';
import { Routes, Route } from 'react-router-dom';


const darkTheme = createTheme({
  palette: {
    mode: "light"
  },

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  
})
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CssBaseline />
        <Header />
        <Routes>
          <Route path='/' element={<div> <HeroSection /> <Blog /> <Email/> </div>} />
          <Route path='/pages' element={ <div> <Pages/> <Email/> </div> } />
          <Route path='/aboutus' element={ <div> <AboutUs/> <Email/> </div> } />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
