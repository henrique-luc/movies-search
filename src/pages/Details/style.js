import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .details_container-button {
    background-color: #4c0f7d;
    padding: 30px;
    width: 100%;
  }

  .details_container-button button {
    background-color: #b019cf;
    color: #fff;
    transition: 0.4s;
    border: none;
    padding: 10px 30px;
  }

  button:hover {
    background-color: #5b0d6b;
  }

  .details_container-info {
    display: flex;
    padding: 30px;
  }

  .details_container-info div {
    margin: 20px 40px;
  }

  .details_container-info div h2 {
    font-size: 3rem;
    font-family: "Helvetica Neue", Helvetica;
    margin-bottom: 10px;
  }

  .details_container-info div p {
    font-style: italic;
    margin-left: 20px;
  }
`;
