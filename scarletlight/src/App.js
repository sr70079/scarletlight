import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import StickyFooter from "./components/StickyFooter/StickyFooter";
// import Wrapper from "./components/Wrapper";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

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
    // <ThemeProvider theme={theme}>
    <Router>
      <div>
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <Nav />
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Wrapper> */}
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/calendar" component={Calendar} /> 
            <Route exact path="/contact" component={Contact} />  */}
          {/* </Wrapper> */}
          <StickyFooter />
        {/* </ThemeProvider> */}
      </div>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
