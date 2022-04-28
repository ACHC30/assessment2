import { Table } from "react-bootstrap";

function QuoteDisplay (props){
    const arr = props.data;
    return <Table striped bordered hover>
        <tbody style={{ height: 100 }}>
        <tr>
            <td>Name</td>
            <td>{arr[0].name}</td>
        </tr>
        <tr>
            <td>Price</td>
            <td>{arr[0].price}</td>
        </tr>
        <tr>
            <td>DayHigh</td>
            <td>{arr[0].dayHigh}</td>
        </tr>
        <tr>
            <td>DayLow</td>
            <td>{arr[0].dayLow}</td>
        </tr>
        <tr>
            <td>Volume</td>
            <td>{arr[0].volume}</td>
        </tr>
        <tr>
            <td>PreviousClose</td>
            <td>{arr[0].previousClose}</td>
        </tr>
        </tbody>
    </Table>
}

export default QuoteDisplay;