import React from 'react'
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';

const cardData = [
  {
    icon: 'gavel',
    text: 'Legal',
    to: '/'
  },

  {
    icon: 'flag',
    text: 'Elections',
    to: ''
  },

  {
    icon: 'local_hospital',
    text: 'Health',
    to: ''
  },

  {
    icon: 'whatshot',
    text: 'Hard News',
    to: ''
  },

  {
    icon: 'group',
    text: 'Service Delivery',
    to: ''
  },

  {
    icon: 'fitness_center',
    text: 'Sport',
    to: ''
  },

  {
    icon: 'person',
    text: 'Gender Violence',
    to: ''
  }
];

const CardWrapper = styled.ul`
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
  }
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 0;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  top: 92px;
`;

const CardItem = styled.li`
   list-style-type: none;
   width: 30%;
   margin-bottom: 10px;
`;

const CardItemStacked = styled.li`
   list-style-type: none;
   width: 30%;
   margin-bottom: 10px;  
   position: relative;
   z-index: 3;
  
   :before {
      content: '';
      position: absolute;
      z-index: -2;
      top: 6px;
      left: 6px;
      width: 100%;
      height: 100px;
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
      height: 100px;
      background-color: #69a626;
      border: 1px solid #73c619;
      border-radius: 4px;
   }
`;

const CardLink = styled.a`
  text-decoration: none;
`;

const TopicCard = styled(Card)`
  && {
    color: white;
    background-color: #73c619;
    height: 100px;
  }
  
  :hover {
      background-color: #8fd247;
  }
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  && {
    :last-child {
      padding: 5px 20px;
    }
  }
`;

function Cards(props) {
  {console.log(props)}

  if (props.stacked) {
    return (
      <CardWrapper>
        {cardData.map(card => (
          <CardItemStacked>
            <CardLink href={card.to}>
              <TopicCard>
                <Content>
                  <Icon style={{height: '32px', marginBottom: '10px'}}>{card.icon}</Icon>
                  <Typography color="inherit">
                    {card.text}
                  </Typography>
                </Content>
              </TopicCard>
            </CardLink>
          </CardItemStacked>
        ))}
      </CardWrapper>
    )
  }
  return (
    <CardWrapper>
      {cardData.map(card => (
        <CardItem>
          <CardLink href={card.to}>
            <TopicCard>
              <Content>
                <Icon style={{height: '32px', marginBottom: '10px'}}>{card.icon}</Icon>
                <Typography color="inherit">
                  {card.text}
                </Typography>
              </Content>
            </TopicCard>
          </CardLink>
        </CardItem>
      ))}
    </CardWrapper>
  )

}

export default Cards;