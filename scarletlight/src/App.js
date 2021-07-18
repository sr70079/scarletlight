import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Nav from "./components/Nav";
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
          {/* <Nav /> */}
          {/* <Wrapper> */}
            {/* <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} /> */}
          {/* </Wrapper> */}
          <StickyFooter />
        {/* </ThemeProvider> */}
      </div>
    </Router>
  );
}

export default App;
