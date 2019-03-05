import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import ClickWrapper from '../../components/ClickWrapper';


const List = styled.div`
  padding: 20px;
  max-width: 640px;
  margin: 0 auto;
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
  }
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

export {
  Click,
  StyledCard,
  StyledCardContent,
  StyledAction,
  List,
};


export default {
  Click,
  StyledCard,
  StyledCardContent,
  StyledAction,
  List,
};