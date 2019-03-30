import styled from 'styled-components';

import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from '@material-ui/core';

import ClickWrapper from '../../components/ClickWrapper';


const List = styled.div`
  padding: 20px;
  max-width: 640px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  display: flex;
  margin: 10px;
`;

const Click = styled(ClickWrapper)`
  width: ${({ button }) => (button ? '100px' : '100%')};
  border-left: ${({ button }) => (button ? '1px solid #d7d7d7' : 'none')};
`;

const StyledAction = styled(CardActionArea)`
  && {
    ${'' /* maybe remove height 100% for the purpose its serving...align items makes more sense */}
    height: 100%;
  }
`;

const StyledCardContent = styled(CardContent)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled(Typography)`
  && {
    font-size: 18px;
    margin-bottom: 2px;
    line-height: 1.1;
    color: #4a4a4a;
  }
`;

const Details = styled(Typography)`
  && {
    color: #4a4a4a;
  }
`;


export {
  Click,
  StyledCard,
  StyledCardContent,
  StyledAction,
  List,
  Title,
  Details,
};


export default {
  Click,
  StyledCard,
  StyledCardContent,
  StyledAction,
  List,
  Title,
  Details,
};
