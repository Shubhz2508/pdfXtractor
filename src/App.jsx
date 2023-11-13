import React from 'react';
import { HashRouter } from "react-router-dom";
import Router from "./routes/Router";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#C5C2C2",
      },
      secondary: {
        main: "#213547",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
