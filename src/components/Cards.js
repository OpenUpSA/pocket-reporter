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
    to: ''
  },

  {
    icon: 'flag',
    text: 'Elections',
    to: ''
  },

  {
    icon: 'health',
    text: 'Health',
    to: ''
  },

  {
    icon: 'flame',
    text: 'Hard News',
    to: ''
  },

  {
    icon: 'group',
    text: 'Service Delivery',
    to: ''
  },

  {
    icon: 'ball',
    text: 'Sport',
    to: ''
  },

  {
    icon: 'profile',
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
`;

const CardItem = styled.li`
   list-style-type: none;
   width: 30%;
   margin-bottom: 10px;
`;

const TopicCard = styled(Card)`
  && {
    color: white;
    background-color: #73c619;
    height: 100px;
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

const Cards = () => (
  <React.Fragment>

    <CardWrapper>
      {cardData.map(card => (
        <CardItem>
          <TopicCard>
            <Content>
              <Icon>{card.icon}</Icon>
              <Typography color="inherit" gutterBottom>
                {card.text}
              </Typography>
            </Content>
          </TopicCard>
        </CardItem>
      ))}
  </CardWrapper>

  </React.Fragment>
);

export default Cards;