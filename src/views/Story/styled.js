import styled from 'styled-components';
import Button from '@material-ui/core/Button';


import ClickWrapper from '../../components/ClickWrapper';


const QuestionList = styled.div`
  padding: 40px;
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
  margin-bottom: 40px;
  padding: 0 40px;
`;

const GreenButton = styled(Button)`
  && {
    background: #73c619;
    color: white;
  }
`;

const ButtonClick = styled(ClickWrapper)`
padding: 0 10px;
`;

export {
  ButtonClick,
  GreenButton,
  QuestionActions,
  ListItem,
  QuestionList,
};


export default {
  ButtonClick,
  GreenButton,
  QuestionActions,
  ListItem,
  QuestionList,
};
