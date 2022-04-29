import SearchApiStocks from "../API/ApiStocks";
import Tables from "../Components/Tables";
import SearchBar from "../Components/SearchBar";
import SelectBar from "../Components/SelectBar";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/App.css";

function filterStocks(data, symbol, industry) {
  const finalData = data.filter((profile) => {
    if (symbol === "" && industry === "") {
      return profile;
    } else if (
      profile.symbol.toLowerCase().includes(symbol.toLowerCase()) &&
      profile.industry.toLowerCase().includes(industry.toLowerCase())
    ) {
      return profile;
    }
  });
  return finalData;
}

function getStocksIndustry(data) {
  let options = [];
  data.map((stock) => options.push(stock.industry));
  return [...new Set(options)].sort();
}

function Stocks() {
  const [searchSymbol, setSearchSymbol] = useState("");
  const [searchIndustry, setSearchIndustry] = useState("");
  const { loading, rowData, error } = SearchApiStocks();
  let uniqueOptions = getStocksIndustry(rowData);
  let stocksList = filterStocks(rowData, searchSymbol, searchIndustry);
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

  let symbolList = [{ value: "", label: "All Symbol" }];
  rowData.map((stocks) => {
    symbolList.push({ value: stocks.symbol, label: stocks.symbol });
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
            <Col xs md lg="auto">
              <SearchBar options={symbolList} onSubmit={setSearchSymbol} />
            </Col>
            <Col xs md lg="auto">
              <SelectBar options={uniqueOptions} onSubmit={setSearchIndustry} />
            </Col>
            <div className="h10"></div>
          </Row>
          <Row>
            <Tables
              clickable={true}
              columns={columns}
              rows={stocksList}
              height={"600px"}
              width={"100%"}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
export default Stocks;
