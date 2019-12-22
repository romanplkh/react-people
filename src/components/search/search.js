import React from "react";

export const Search = ({ placeholder, changeHandler }) => {
  return (
    <div>
      <input type="search" placeholder={placeholder} onChange={changeHandler} />
    </div>
  );
};
