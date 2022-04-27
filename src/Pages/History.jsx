import SearchApiHistory from "../API/ApiHistory";
import SearchApiQuote from "../API/ApiQuote";
import Tables from "../Components/Tables";
import { useState } from "react";
import Charts from "../Components/Charts";
import MyDatePicker from "../Components/MyDatePicker";
import { Table } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import GetFooter from "../Components/Footer";
function PriceHistory() {
  const [searchDate, setSearchDate] = useState("");
  const { loading, rowData, name, error } = SearchApiHistory(searchDate);
  const { loadingQ, rowDataQ, errorQ } = SearchApiQuote(name);
  const columns = [
    {
      headername: "Date",
      field: "date",
      resizable: true,
      flex: 1,
      sortable: true,
      filter: true,
    },
    {
      headername: "Open",
      field: "open",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headername: "High",
      field: "high",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headername: "Low",
      field: "low",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headername: "Volume",
      field: "volume",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
  ];
  const columnsQuote = [
    { headername: "Name", field: "name", resizable: true, flex: 1 },
    { headername: "Price", field: "price", resizable: true, flex: 2 },
    { headername: "DayHigh", field: "dayHigh", resizable: true, flex: 2 },
    { headername: "DayLow", field: "dayLow", resizable: true, flex: 2 },
    { headername: "volume", field: "volume", resizable: true, flex: 2 },
    {
      headername: "PreviousClose",
      field: "previousClose",
      resizable: true,
      flex: 2,
    },
  ];
  const dates = rowData.map((history) => history.date);
  const open = rowData.map((history) => history.open);
  const high = rowData.map((history) => history.high);
  const low = rowData.map((history) => history.low);
  const volumes = rowData.map((history) => history.volume);

  if (loading || loadingQ || rowData === undefined) {
    return <h1>Loading...</h1>;
  }
  if (error != null || errorQ) {
    return <h1>error...</h1>;
  } else {
    return (
      <div>
        <Container>
          <Row>
            <p className="title">History of {name}</p>
          </Row>
          <Row>
            <MyDatePicker onSubmit={setSearchDate} />
          </Row>
          <Row>
            <Col>
              <Row>
                <h1>Quote of {name}</h1>
              </Row>
              <Row>
                <tbody style={{ height: 100 }}>
                  <tr>
                    <td>Name</td>
                    <td>{rowDataQ.name}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{rowDataQ.price}</td>
                  </tr>
                  <tr>
                    <td>DayHigh</td>
                    <td>{rowDataQ.dayHigh}</td>
                  </tr>
                  <tr>
                    <td>DayLow</td>
                    <td>{rowDataQ.dayLow}</td>
                  </tr>
                  <tr>
                    <td>Volume</td>
                    <td>{rowDataQ.volume}</td>
                  </tr>
                  <tr>
                    <td>PreviousClose</td>
                    <td>{rowDataQ.previousClose}</td>
                  </tr>
                </tbody>
              </Row>
            </Col>
            <Col md lg={8}>
              <Table striped bordered hover></Table>
              <Tables
                columns={columns}
                rows={rowData}
                height={"300px"}
                width={"100%"}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Charts date={dates} data={open} title={"open"} color={"Blue"} />
            </Col>
            <Col>
              <Charts date={dates} data={high} title={"high"} color={"Green"} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Charts date={dates} data={low} title={"low"} color={"Red"} />
            </Col>
            <Col>
              <Charts
                date={dates}
                data={volumes}
                title={"volume"}
                color={"Black"}
              />
            </Col>
          </Row>
        </Container>

        {/* <Tables
          columns={columnsQuote}
          rows={rowDataQ}
          height={"100px"}
          width={"100%"}
        /> */}
        <GetFooter />
      </div>
    );
  }
}

export default PriceHistory;
