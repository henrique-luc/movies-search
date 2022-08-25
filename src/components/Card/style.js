import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  background-color: #4c0f7d;
  margin: 10px auto 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  figure {
    height: 420px;
    overflow: hidden;
  }

  h2 {
    font-size: 1.3em;
    margin: 20px 0;
    height: 50px;
    padding: 0 10px;
  }

  button {
    width: 100%;
    background-color: #b019cf;
    color: #fff;
    transition: 0.4s;
    border: none;
    padding: 10px;
  }

  button:hover {
    background-color: #5b0d6b;
  }
`;
