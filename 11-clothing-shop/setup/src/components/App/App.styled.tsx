import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #000;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
