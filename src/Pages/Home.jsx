import "../Styles/App.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../Images/Banner.png";
import icon from "../Images/icon.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import Banner2 from "../Images/Banner2.png";
import Banner3 from "../Images/Banner3.png";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={Banner} alt="First slide" />
                <Carousel.Caption>
                  <p>Click on stocks to see the available companies.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Banner2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <p>We also provide the quote for each stocks.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Banner3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <p>
                    History might help you to see the 100 days log of each
                    stocks.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <p className="title">NAVIGATE</p>
          <p className="title-small">Stock prices API Assessment 2 IFN666</p>
        </Row>
        <div className="h50"></div>
        <Row>
          <Col>
            <div className="icon">
              <img src={icon} alt="Stocks" />
              <p className="h30"></p>
              <p className="context">
                Click on stocks to see the available companies.
              </p>
            </div>
          </Col>
          <Col>
            <div className="icon">
              <img src={icon2} alt="Stocks" />
              <p className="h30"></p>
              <p className="context">
                We also provide the quote for each stocks.
              </p>
            </div>
          </Col>
          <Col>
            <div className="icon">
              <img src={icon3} alt="Stocks" />
              <p className="h30"></p>
              <p className="context">
                History might help you to see the 100 days log of each stocks.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
