import styled from 'styled-components';

import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CircularProgress,
} from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';

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
    height: 100%;
  }
`;

const StyledCardContent = styled(CardContent)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    font-size: 14px;
    line-height: 1.4;
  }
`;

const ProgressContainer = styled.div`
  width: 55px;
  height: 55px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  padding-left: 10px;
`;

const ProgressStyled = styled(CircularProgress)`
  && {
    color: #73c619;
  }
`;

const FloatingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  padding-left: 10px;
`;

const ProgressBackground = styled(CircularProgress)`
  && {
    color: #e6e6e6;
  }
`;

const EmailIconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EmailIconStyled = styled(EmailIcon)`
  && {
    font-size: 50px;
    height: 40px;
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
  ProgressContainer,
  ProgressStyled,
  FloatingWrap,
  ProgressBackground,
  EmailIconContainer,
  EmailIconStyled,
};


export default {
  Click,
  StyledCard,
  StyledCardContent,
  StyledAction,
  List,
  Title,
  Details,
  ProgressContainer,
  ProgressStyled,
  FloatingWrap,
  ProgressBackground,
  EmailIconContainer,
  EmailIconStyled,
};
