import SearchApiStocks from "../API/ApiStocks";
import Tables from "../Components/Tables";
import SearchBar from "../Components/SearchBar";
import SelectBar from "../Components/SelectBar";
import { useState } from "react";
import "../styles/App.css";
import { Container, Row, Col } from "react-bootstrap";
import GetFooter from "../Components/Footer";

function Stocks() {
  const [searchSymbol, setSearchSymbol] = useState("");
  const [searchIndustry, setSearchIndustry] = useState("");
  const { loading, rowData, error } = SearchApiStocks(
    searchSymbol,
    searchIndustry
  );
  const columns = [
    {
      headername: "Symbol",
      field: "symbol",
      resizable: true,
      flex: 1,
      sortable: true,
      filter: true,
    },
    {
      headername: "Name",
      field: "name",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headername: "Industry",
      field: "industry",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
  ];

  let options = [];
  rowData.map((stock) => options.push(stock.industry));
  let uniqueOptions = [...new Set(options)];
  const finalData = rowData.filter((profile) => {
    if (searchSymbol === "" && searchIndustry === "") {
      return profile;
    } else if (
      profile.symbol.toLowerCase().includes(searchSymbol.toLowerCase()) &&
      profile.industry.toLowerCase().includes(searchIndustry.toLowerCase())
    ) {
      return profile;
    }
  });

  if (loading || rowData === undefined) {
    return <h1>Loading...</h1>;
  }
  if (error != null) {
    return <h1>error...</h1>;
  } else {
    return (
      <div>
        <Container>
          <Row>
            <p className="title">Stocks</p>
          </Row>
          <Row>
            <Col>
              <SearchBar onSubmit={setSearchSymbol} />
            </Col>

            <Col xs md lg={{ span: 2, offset: 5 }}>
              <SelectBar options={uniqueOptions} onSubmit={setSearchIndustry} />
            </Col>
          </Row>
          <Row>
            <Tables
              columns={columns}
              rows={finalData}
              height={"600px"}
              width={"100%"}
            />
          </Row>
        </Container>

        <div style={{ clear: "both" }}></div>
        <GetFooter />
      </div>
    );
  }
}

export default Stocks;
