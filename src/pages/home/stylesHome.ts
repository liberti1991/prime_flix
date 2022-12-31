import styled from "styled-components";

export const ContainerHomePage = styled.div`
  max-width: 800px;
  margin: 14px auto;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;

  > h4 {
    padding: 10px 0;
  }

  > img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  > a {
    background-color: #116feb;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    text-decoration: none;
    color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
