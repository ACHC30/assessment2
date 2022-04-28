import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <div>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="search"
                placeholder="Stocks symbol"
                value={innerSearch}
                onChange={(e) => setInnerSearch(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Button
            variant="dark"
            type="submit"
            id="search-button"
            onClick={() => props.onSubmit(innerSearch)}
          >
            Submit
          </Button>
        </Col>
      </Row>

      {/* <input
        type="search"
        id="search"
        name="search"
        aria-labelledby="search-button"
      /> */}
    </div>
  );
}

export default SearchBar;
