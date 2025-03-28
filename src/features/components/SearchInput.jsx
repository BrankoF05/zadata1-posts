import React from "react";

function SearchInput({ setInput, setFilter, filter }) {
  function filterInput(e) {
    setInput(e.target.value);
  }

  function filterChange(e) {
    setFilter(e.target.value);
  }
  return (
    <div>
      <input name={filter} onChange={filterInput} />
      <select onChange={filterChange}>
        <option value="title">Filter by name</option>
        <option value="body">Filter by description</option>
      </select>
    </div>
  );
}

export default SearchInput;
