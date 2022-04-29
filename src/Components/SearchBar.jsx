import { useState } from "react";
import Select from 'react-select'
function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <Select 
    placeholder={"All Symbol"} 
    options={props.options} 
    onChange ={characterEntered => {setInnerSearch(characterEntered.value)}} 
    onInputChange={props.onSubmit(innerSearch)}
    />
  );
}

export default SearchBar;
