import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function SelectBar(props){
    const [innerSearch, setInnerSearch] = useState("");
    return ( 
    <DropdownButton title={innerSearch === "" ? "Select" : innerSearch}>
    {props.options.map((title) => (
      <Dropdown.Item
        eventKey={title}
        onClick={(event) => {
          setInnerSearch(event.target.textContent);
          props.onSubmit(event.target.textContent);
        }}
      >
        {title}
      </Dropdown.Item>
    ))}
  </DropdownButton> );
}

export default SelectBar;