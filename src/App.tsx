import FooterComponent from "./components/FooterComponent/FooterComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import { TicketProvider } from "./contexts/TicketContext/TicketContext";
import Router from "./routes/Router";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import { GlobalStyle } from "./theme/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TicketProvider>
        <NavbarComponent />
        <Router />
        <FooterComponent />
        <GlobalStyle />
      </TicketProvider>
    </ThemeProvider>
  );
};

export default App;
