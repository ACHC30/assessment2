import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import Select from 'react-select'
function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  const handleInputChange = characterEntered => {
    setInnerSearch(characterEntered.value);
    
  };
  return (
    <div>
      <Select placeholder={"All Symbol"} options={props.options} onChange ={handleInputChange} onInputChange={props.onSubmit(innerSearch)}></Select>
    </div>
  );
}

export default SearchBar;
