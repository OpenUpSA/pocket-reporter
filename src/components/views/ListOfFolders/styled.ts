import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 500px) {
    width: 50%;
  }

  @media screen and (min-width: 700px) {
    width: ${100 / 3}%;
  }
`;

export { Wrap, CardWrapper };

export default {
  Wrap,
  CardWrapper,
};
