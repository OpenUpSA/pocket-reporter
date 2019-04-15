import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import HeadingComponent from '../../global/Heading';

const Wrapper = styled.div`
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

const Heading = styled(HeadingComponent)`
  && {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

const GreenButton = styled(Button)`
  && {
    background: #73c619;
    color: white;
  }
`;

export { Heading, Wrapper, CardWrapper, GreenButton };

export default {
  Heading,
  Wrapper,
  CardWrapper,
  GreenButton,
};
