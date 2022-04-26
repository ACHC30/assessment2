import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Routers/Home";
import Stocks from "./Routers/Stocks";
import PriceHistory from "./Routers/History";
import Quote from "./Routers/Quote";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="stocks">Stocks</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/stocks/:symbol" element={<PriceHistory />} />
          <Route path="/stocks/:symbol/quote" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
