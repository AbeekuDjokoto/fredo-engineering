import "./index.css";
import { LandingPage } from "./pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
