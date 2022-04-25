import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {useNavigate} from "react-router-dom"

function Tables(props){
    const navigate = useNavigate();
    return(
        <div className="ag-theme-balham" style={{ height: "300px", width: "100%"}}>
            <AgGridReact 
            columnDefs={props.columns} 
            rowData={props.rows} 
            pagination={true}
            rowSelection="Single"
            onRowClicked={(e) => navigate(`/stocks/${props.rows[e.rowIndex].symbol}`, { state: { name: props.rows[e.rowIndex].symbol } } )}
            />
        </div>
    );
}

export default Tables;