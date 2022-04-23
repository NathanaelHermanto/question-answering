import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
      </Router>
    </>
  );
}

export default App;
