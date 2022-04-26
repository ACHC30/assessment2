import SearchApiStocks from "../API/ApiStocks";
import Tables from "../Components/Tables";
import SearchBar from "../Components/SearchBar";
import SelectBar from "../Components/SelectBar";
import { useState } from "react";

function Stocks() {
    const [searchSymbol, setSearchSymbol] = useState("");
    const [searchIndustry, setSearchIndustry] = useState("");
    const { loading, rowData, error } = SearchApiStocks(searchSymbol, searchIndustry);
    const columns = [
      { headername: "Symbol", field: "symbol", resizable: true, flex: 1,sortable: true, filter: true },
      { headername: "Name", field: "name", resizable: true, flex: 2, sortable: true, filter: true},
      { headername: "Industry", field: "industry", resizable: true, flex: 2, sortable: true, filter: true },
    ];

   let options = [];
   rowData.map((stock) => options.push(stock.industry));
   let uniqueOptions = [...new Set(options)];
   const finalData = rowData.filter((profile) => {
    if (searchSymbol === "" && searchIndustry === "") {
      return profile;
    } else if (
      profile.symbol.includes(searchSymbol) &&
      profile.industry.includes(searchIndustry)
    ) {
      return profile;
    }
  });
      
    if (loading || rowData == undefined) {
      return <h1>Loading...</h1>;
    }
    if (error != null) {
      return <h1>error...</h1>;
    } else {
      return (
        <div>
          <h1>Stocks</h1>
          <p style={{ float: "left", padding: "8px" }}>
            Symbol <SearchBar onSubmit={setSearchSymbol} />
          </p>
          
          <p style={{ float: "left", padding: "10px" }}>
            Industry <SelectBar options={uniqueOptions} onSubmit={setSearchIndustry} />
          </p>
          <div style={{clear: "both"}}>
           <Tables columns={columns} rows={finalData} height={"300px"} width={"100%"}/>
          </div>
          
        </div>
      );
    }
}

export default Stocks;