import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";
import Navbar from "@/scenes/navbar";

function App() {
  //createTheme is from MUI and passes into themeSettings; makes sure it happens only on initial load
  const theme = useMemo(() => createTheme(themeSettings), [])
  return <div className='app'>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100" height="100%" padding="1rem 2rem 4 rem 2rem">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/predictions" element={<Predictions />} /> */}
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  </div>;

}

export default App;
