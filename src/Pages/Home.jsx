import "../styles/App.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../Images/Banner.png";
import icon from "../Images/icon.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import GetFooter from "../Components/Footer";
function Home() {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={Banner} alt="Stocks" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <p className="title">NAVIGATE</p>
            <p className="title-small">Stock prices API Assessment 2 IFN666</p>
          </Row>
          <div style={{ height: 50 }}></div>
          <Row>
            <Col>
              <div className="icon">
                <img src={icon} alt="Stocks" />
                <p style={{ height: 30 }}></p>
                <p classname="context">
                  Click on stocks to see the available companies.
                </p>
              </div>
            </Col>
            <Col>
              <div className="icon">
                <img src={icon2} alt="Stocks" />
                <p style={{ height: 30 }}></p>
                <p classname="context">
                  We also provide the quote for each stocks.
                </p>
              </div>
            </Col>
            <Col>
              <div className="icon">
                <img src={icon3} alt="Stocks" />
                <p style={{ height: 30 }}></p>
                <p classname="context">
                  History might help you to see the 100 days log of each stocks.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <GetFooter />
    </div>
  );
}

export default Home;
