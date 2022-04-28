import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {useNavigate} from "react-router-dom"

function Tables(props){
    const navigate = useNavigate();
    return(
        <div className="ag-theme-balham" style={{ height: props.height, width: props.width}}>
            <AgGridReact 
            columnDefs={props.columns} 
            rowData={props.rows} 
            pagination={true}
            paginationPageSize={25}
            rowSelection="Single"
            onRowClicked={(e) => props.clickable ? 
                navigate(`/stocks/${props.rows[e.rowIndex].symbol}`, { state: { name: props.rows[e.rowIndex].symbol } } ) : ""}
            />
        </div>
    );
}

export default Tables;