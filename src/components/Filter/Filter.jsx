import React from 'react';
const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contact by name
      <input type="text" value={value} onChange={e => onChange(e)} />
    </label>
  );
};
export default Filter;
