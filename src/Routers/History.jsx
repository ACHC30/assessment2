import SearchApiHistory from "../ApiHistory"
import Tables from "../Components/Tables";
import { useState } from "react";
import Charts from "../Components/Charts";
import MyDatePicker from "../Components/MyDatePicker";
import {useNavigate} from "react-router-dom"

function PriceHistory() {
  const [searchDate, setSearchDate] = useState("");
  const { loading, rowData,name, error } = SearchApiHistory(searchDate);
  const navigate = useNavigate();
  const columns = [
    { headername: "Date", field: "date", resizable: true, flex: 1 },
    { headername: "Open", field: "open", resizable: true, flex: 2 },
    { headername: "High", field: "high", resizable: true, flex: 2 },
    { headername: "Low", field: "low", resizable: true, flex: 2 },
    { headername: "Volume", field: "volume", resizable: true, flex: 2 },
  ];
  const dates = rowData.map((history) => history.date);
  const open = rowData.map((history) => history.open);
  const high = rowData.map((history) => history.high);
  const low = rowData.map((history) => history.low);
  const volumes = rowData.map((history) => history.volume);
  if (loading || rowData === undefined) {
    return <h1>Loading...</h1>;
  }
  if (error != null) {
    return <h1>error...</h1>;
  }else{
    return (
      <div>
        <h1>History of {name}</h1>
        <MyDatePicker onSubmit={setSearchDate}/>
        <button  
          type="button" 
          id = "search-button"
          onClick={() => navigate(`/stocks/${name}/quote`, { state: { name: name } } )}
        >Get The Quote</button>
        <Tables columns={columns} rows={rowData} />
        <Charts date={dates} data={open} title={"open"} color={"Black"}/>
        <Charts date={dates} data={high} title={"high"} color={"Green"}/>
        <Charts date={dates} data={low} title={"low"} color={"Red"}/>
        <Charts date={dates} data={volumes} title={"volume"} color={"Yellow"}/>
      </div>
    );
  }
}

export default PriceHistory;