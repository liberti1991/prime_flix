import styled from "styled-components";

export const ContainerFavorites = styled.div`
  max-width: 800px;
  margin: 14px auto;

  > h1 {
    margin: 10px 0;
  }

  > ul {
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;

      > span {
        font-size: 18px;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        > a {
          text-decoration: none;
          color: #116feb;
        }

        > button {
          border-radius: 5px;
          font-size: 20px;
          outline: none;
          cursor: pointer;
          transition: all 0.3s;
          background-color: #d4d4d4;
          text-decoration: none;
          color: #000;
          padding: 5px 16px;

          :hover {
            background-color: #0c1b33;
            color: #d4d4d4;
          }
        }
      }
    }
  }
`;
