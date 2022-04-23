import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  );
}

export default App;
