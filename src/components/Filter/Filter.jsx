import React from 'react';
import { FilterBox } from './Filter.styled';
const Filter = ({ onChange, value }) => {
  return (
    <FilterBox>
      <span>Find contact by name</span>
      <input type="text" value={value} onChange={e => onChange(e)} />
    </FilterBox>
  );
};
export default Filter;
