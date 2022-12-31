import styled from "styled-components";

export const ContainerNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 60px);
  gap: 10px;

  > h1 {
    font-size: 120px;
  }

  a {
    text-decoration: none;
    background-color: #116feb;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
  }
`;
