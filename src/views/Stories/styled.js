import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import ClickWrapper from '../../components/ClickWrapper';
import CircularProgress from '@material-ui/core/CircularProgress';


const List = styled.div`
  padding: 20px;
  max-width: 640px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  display: flex;
  align-items: stretch;
  margin: 10px;
`;

const Click = styled(ClickWrapper)`
  width: ${({ button }) => (button ? '100px' : '100%')};
  border-left: ${({ button }) => (button ? '1px solid #d7d7d7' : 'none')};
`;

const StyledAction = styled(CardActionArea)`
  && {
    padding: 0;
    height: 100%;
  }
`;

const StyledCardContent = styled(CardContent)`
  && {
    justify-content: space-between;
    display: flex;
    margin: 0;
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 2px;
  font-size: 18px;
  font-family: Roboto;
  margin-top: 0;
  color: #4a4a4a;
  line-height: 1.1;
`;

const StoryProgress = styled(CircularProgress)`
  && {
    border: 0;
    color: #73c619;
    height: 55px;
    width: 55px;
  }
`;

export {
  Click,
  StyledCard,
  StyledCardContent,
  StyledAction,
  List,
  Title,
  StoryProgress,
};


export default {
  Click,
  StyledCard,
  StyledCardContent,
  StyledAction,
  List,
  Title,
  StoryProgress,
};
