import styled from "styled-components";

export const ContainerMovie = styled.div`
  max-width: 800px;
  padding: 10px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 50px;
  box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.75);

  > h1 {
    padding: 10px 0;
  }

  > article {
    display: grid;
    grid-template-columns: 3fr 5fr;
    gap: 10px;

    > img {
      border-radius: 8px;
      margin: 0 auto;
      width: 100%;
      max-width: 100%;
      max-height: 450px;
    }

    > section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 10px;

      > div {
        :first-child {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        :last-child {
          display: flex;
          justify-content: end;
          gap: 15px;

          > a,
          button {
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
  }
`;
