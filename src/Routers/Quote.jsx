import SearchApiQuote from "../ApiQuote";
import Tables from "../Components/Tables";


function Quote(){
    const { loading, rowData, name, error } = SearchApiQuote();
    const columns = [
        { headername: "Name", field: "name", resizable: true, flex: 1 },
        { headername: "Price", field: "price", resizable: true, flex: 2 },
        { headername: "DayHigh", field: "dayHigh", resizable: true, flex: 2 },
        { headername: "DayLow", field: "dayLow", resizable: true, flex: 2 },
        { headername: "volume", field: "volume", resizable: true, flex: 2 },
    ];

    if (loading || rowData === undefined) {
        return <h1>Loading...</h1>;
    }
    if (error != null) {
    return <h1>error...</h1>;
    }else{
        return (
            <div>
              <h1>Quote of {name}</h1>
              <Tables columns={columns} rows={rowData} />
            </div>
        );
    }
   
}

export default Quote;