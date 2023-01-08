import React from 'react';
const Filter = () => {
  return (
    <label>
      Find contact by name
      <input
        type="text"
        value=""
        onChange={() => this.props.onChange(this.value)}
      />
    </label>
  );
};
export default Filter;
