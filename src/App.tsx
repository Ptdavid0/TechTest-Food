import "./App.css";
import { TicketProvider } from "./contexts/TicketContext/TicketContext";
import Router from "./routes/Router";

function App() {
  return (
    <TicketProvider>
      <Router />;
    </TicketProvider>
  );
}

export default App;
