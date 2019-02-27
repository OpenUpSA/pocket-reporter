import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import removeProps from '../../helpers/removeProps';


const CardItemStacked = styled.div`
   position: relative;
   z-index: 3;
  
   :before {
      content: '';
      position: absolute;
      z-index: -2;
      top: 6px;
      left: 6px;
      width: 100%;
      height: 100%;
      background-color: #69a626;
      border: 1px solid #73c619;
      box-sizing: border-box;
      border-radius: 4px;
   }
   
   :after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 3px;
      left: 3px;
      width: 100%;
      height: 100%;
      background-color: #69a626;
      border: 1px solid #73c619;
      border-radius: 4px;
   }
`;


const SanitisedCard = removeProps(Card, 'resource');
const TopicCard = styled(SanitisedCard)`
  && {
    color: white;
    background-color: ${({ resource }) => (resource ? '#979797' : '#73c619')};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


const Text = styled.div`
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 10px 10px 5px;
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100px;
`;


export {
  CardItemStacked,
  TopicCard,
  Text,
  Content,
};


export default {
  CardItemStacked,
  TopicCard,
  Text,
  Content,
};
