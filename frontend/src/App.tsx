import Router from "./pages/Router";
import { FC, Suspense } from "react";
import { Container, ThemeProvider } from "@mui/material";

import "./Styles/fonts.css";
import appTheme from "./Styles/appTheme";
import LazyLoader from "./components/LazyLoader/LazyLoader";

const App: FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Suspense fallback={<LazyLoader />}>
        <Container maxWidth="sm">
          <Router />
        </Container>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
