import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: #4c0f7d;
  padding: 30px;

  form {
    width: 370px;
    display: flex;
    justify-content: space-between;
  }

  form input,
  select,
  button {
    padding: 10px;
  }

  form button {
    background-color: #b019cf;
    color: #fff;
    transition: 0.4s;
    border: none;
  }

  form button:hover {
    background-color: #5b0d6b;
  }
`;
