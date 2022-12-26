import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #000000;
  height: 60px;

  > a {
    text-decoration: none;
    cursor: pointer;

    padding: 5px 14px;
    background-color: #fff;
    border-radius: 5px;
    color: #000;

    :nth-child(1) {
      background-color: #000;
      font-size: 30px;
      font-weight: bold;
      color: red;
    }
  }
`;
