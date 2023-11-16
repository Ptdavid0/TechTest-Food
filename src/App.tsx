import "./App.css";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import { TicketProvider } from "./contexts/TicketContext/TicketContext";
import Router from "./routes/Router";

const App = () => {
  return (
    <TicketProvider>
      <NavbarComponent />
      <Router />
      <FooterComponent />
    </TicketProvider>
  );
};

export default App;
