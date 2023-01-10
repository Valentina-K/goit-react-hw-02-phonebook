import styled from 'styled-components';
export const List = styled.ul`
  width: 400px;
  font-size: 24px;
  list-style: none;
  & div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: baseline;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  & button {
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #e1edf5;
    box-shadow: 4px 4px 4px -3px rgba(0, 0, 0, 0.66);
    font-size: 20px;
  }
`;
