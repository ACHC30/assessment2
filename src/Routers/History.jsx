import SearchApiHistory from "../API/ApiHistory"
import SearchApiQuote from "../API/ApiQuote";
import Tables from "../Components/Tables";
import { useState } from "react";
import Charts from "../Components/Charts";
import MyDatePicker from "../Components/MyDatePicker";

function PriceHistory() {
  const [searchDate, setSearchDate] = useState("");
  const { loading, rowData, name, error } = SearchApiHistory(searchDate);
  const { loadingQ, rowDataQ, errorQ } = SearchApiQuote(name);
  const columns = [
    { headername: "Date", field: "date", resizable: true, flex: 1 },
    { headername: "Open", field: "open", resizable: true, flex: 2 },
    { headername: "High", field: "high", resizable: true, flex: 2 },
    { headername: "Low", field: "low", resizable: true, flex: 2 },
    { headername: "Volume", field: "volume", resizable: true, flex: 2 },
  ];
  const columnsQuote = [
      { headername: "Name", field: "name", resizable: true, flex: 1 },
      { headername: "Price", field: "price", resizable: true, flex: 2 },
      { headername: "DayHigh", field: "dayHigh", resizable: true, flex: 2 },
      { headername: "DayLow", field: "dayLow", resizable: true, flex: 2 },
      { headername: "volume", field: "volume", resizable: true, flex: 2 },
      { headername: "PreviousClose", field: "previousClose", resizable: true, flex: 2 },
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
  }else{
    return (
      <div>
        <h1>History of {name}</h1>
        <h1>Quote of {name}</h1>
        <Tables columns={columnsQuote} rows={rowDataQ} height={"100px"} width={"100%"}/>
        <MyDatePicker onSubmit={setSearchDate}/>
        <Tables columns={columns} rows={rowData} height={"300px"} width={"100%"}/>
        <Charts date={dates} data={open} title={"open"} color={"Black"}/>
        <Charts date={dates} data={high} title={"high"} color={"Green"}/>
        <Charts date={dates} data={low} title={"low"} color={"Red"}/>
        <Charts date={dates} data={volumes} title={"volume"} color={"Yellow"}/>
      </div>
    );
  }
}

export default PriceHistory;