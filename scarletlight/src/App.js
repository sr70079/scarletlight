import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./views/About";
import Contact from "./views/ContactPage/ContactPage";
import Calendar from "./views/Calendar";
import Landing from "./views/LandingPage/LandingPage";
import Portfolio from "./views/Portfolio/Portfolio";
import Pricing from "./views/Pricing";

import Nav from "./components/Nav/Nav";
import StickyFooter from "./components/StickyFooter/StickyFooter";
import Wrapper from "./components/Wrapper/Wrapper";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'

import Item from './components/Item/item'



// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import { amber, teal } from '@material-ui/core/colors';

// const theme = createMuiTheme({
//   palette: {
//     primary: amber,
//     secondary: teal,
//   },
//   typography: {
//     fontFamily: 'Playfair',
//   }
// });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
            <CssBaseline />
            {/* <Nav /> */}
            {/* <Item /> */}
             


            <Wrapper>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/calendar" component={Calendar} /> 
              <Route exact path="/contact" component={Contact} /> 
            </Wrapper>

            <StickyFooter />
            
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
