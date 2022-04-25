import { Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function MyDatePicker(props){
    const [to, setTo] = useState(new Date());
    return <div>
        <DatePicker selected={to} onChange={date => setTo(date)} />
        <Button onClick={() => props.onSubmit(to)}>Search Date</Button>
    </div>
}

export default MyDatePicker;
