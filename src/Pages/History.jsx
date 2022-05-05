import SearchApiHistory from "../API/ApiHistory";
import SearchApiQuote from "../API/ApiQuote";
import Tables from "../Components/Tables";
import Charts from "../Components/Charts";
import MyDatePicker from "../Components/MyDatePicker";
import QuoteDisplay from "../Components/QuoteDisplay";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function getHistoryInfo(data) {
  const dates = data.map((history) => history.date);
  const open = data.map((history) => history.open);
  const high = data.map((history) => history.high);
  const low = data.map((history) => history.low);
  const close =data.map((history) => history.close);
  const volumes = data.map((history) => history.volume);
  
  dates.reverse();
  open.reverse();
  high.reverse();
  low.reverse();
  close.reverse();
  volumes.reverse();

  return {
    dates,
    open,
    high,
    low,
    close,
    volumes,
  };
}

function PriceHistory() {
  const [searchDate, setSearchDate] = useState("");
  const { loading, rowData, name, error } = SearchApiHistory(searchDate);
  const { dates, open, high, low, close, volumes } = getHistoryInfo(rowData);
  const { loadingQ, rowDataQ, errorQ } = SearchApiQuote(name);
  const columns = [
    {
      headername: "Date",
      field: "date",
      resizable: true,
      flex: 2,
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
      headername: "Close",
      field: "close",
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
            <div className="h10">
              Selecet the date you want to search from. if you pick today it will show teh history for the past 100 days
            </div>
          </Row>
          <Row>
          <Col md lg={8}>
              <Tables
                clickable={false}
                columns={columns}
                rows={rowData}
                style={"table_history"}
              />
            </Col>
            <Col>
              <Row>
                <h3>Quote of {name}</h3>
              </Row>
              <Row>
                <QuoteDisplay data={rowDataQ} />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md lg={4}>
              <Charts
                date={dates}
                data={open}
                title={"open"}
                color={"#227ab4fa"}
              />
            </Col>
            <Col xs={12} md lg={4}>
              <Charts
                date={dates}
                data={high}
                title={"high"}
                color={"#3db870fa"}
              />
            </Col>
            <Col xs={12} md lg={4}>
              <Charts
                date={dates}
                data={low}
                title={"low"}
                color={"#bd3b3bfa"}
              />
            </Col>
          </Row>
          <Row>
          <Col xs={12} md lg={6}>
              <Charts
                date={dates}
                data={close}
                title={"close"}
                color={"#FFFF00"}
              />
            </Col>
            <Col xs={12} md lg={6}>
              <Charts
                date={dates}
                data={volumes}
                title={"volume"}
                color={"#000000e0"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PriceHistory;
