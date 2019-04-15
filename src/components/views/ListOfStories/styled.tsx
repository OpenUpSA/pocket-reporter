import styled from 'styled-components';
import { Card, CardContent, CardActionArea, Typography, CircularProgress } from '@material-ui/core';

const List = styled.div`
  padding: 20px;
  max-width: 640px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  && {
    display: flex;
    margin: 10px;
    min-height: 91px;
  }
`;

const StyledAction = styled(CardActionArea)`
  && {
    flex-grow: 1;
  }
`;

const StyledButton = styled(CardActionArea)`
  && {
    width: auto;
    padding: 20px;
    border-left: 1px solid #dbdbdb;
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
    font-weight: bold;
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

const StyledIcon = styled.svg`
  && {
    fill: #73c619;
  }
`;

export {
  StyledButton,
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
  StyledIcon,
};

export default {
  StyledButton,
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
  StyledIcon,
};
