import FooterComponent from "./components/FooterComponent/FooterComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import { TicketProvider } from "./contexts/TicketContext/TicketContext";
import Router from "./routes/Router";

import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <TicketProvider>
      <NavbarComponent />
      <Router />
      <FooterComponent />
      <GlobalStyle />
    </TicketProvider>
  );
};

export default App;
