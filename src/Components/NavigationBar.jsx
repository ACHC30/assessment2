import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";
import {
Navbar,
Container,
Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Pages/Home";
import Stocks from "../Pages/Stocks";
import PriceHistory from "../Pages/History";
import GetFooter from "../Components/Footer";

function NavigationBar(){
    return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Show Image Here</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/stocks">Stocks</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/stocks/:symbol" element={<PriceHistory />} />
      </Routes>
      <GetFooter />
  </Router>
  );
}

export default NavigationBar;