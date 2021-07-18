import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import StickyFooter from "./components/StickyFooter/StickyFooter";
// import Wrapper from "./components/Wrapper";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Router>
      <div>
        {/* <ThemeProvider theme={theme}> */}
          {/* <CssBaseline /> */}
          <Nav />
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
  );
}

export default App;
