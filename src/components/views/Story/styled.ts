import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import ClickWrapper from '../../global/ClickWrapper';

const QuestionList = styled.div`
  padding-bottom: 30px 40px 0;
`;

const ListItem = styled.div`
  font-weight: bold;
  padding-bottom: 35px;
  max-width: 800px;
  margin: 0 auto;
`;

const QuestionActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 40px 40px;
  max-width: 880px;
  margin: 0 auto 40px;
`;

const GreenButton = styled(Button)`
  && {
    background: #73c619;
    color: white;
    margin-left: 10px;
  }
`;

const ButtonClick = styled(ClickWrapper)`
  padding: 0 10px;
  cursor: pointer;
`;

const HeadingWrap = styled.div`
  && {
    position: relative;
    left: -16px;
  }
`;

const Description = styled(Typography)`
  && {
    color: grey;
  }
`;

export {
  ButtonClick,
  GreenButton,
  QuestionActions,
  ListItem,
  QuestionList,
  HeadingWrap,
  Description,
};

export default {
  ButtonClick,
  GreenButton,
  QuestionActions,
  ListItem,
  QuestionList,
  HeadingWrap,
  Description,
};
