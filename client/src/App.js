import "./App.css";
import React, { useState } from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import LoginBox from "./components/LoginBox";
import Chat from "./components/Chat";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#80bad1",
    },
    secondary: {
      main: "#a0aba3",
    },
    background: {
      main: "#e5f5ea",
    },
  },

  MuiTypography: {
    variantMapping: {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h5",
      h5: "h2",
      h6: "h2",
      subtitle1: "h2",
      subtitle2: "h2",
      body1: "span",
      body2: "span",
    },
  },
});

function App() {
  const [name, setName] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Route exact path="/" render={() => <LoginBox setName={setName} />} />
          <Route exact path="/chat" render={() => <Chat name={name} />} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
