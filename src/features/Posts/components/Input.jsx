import React, { useState, useEffect } from "react";

function Input(props) {
  function filterInput(e) {
    props.setInput(e.target.value);
  }

  function filterChange(e) {
    props.setFilter(e.target.value);
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

export default Input();
