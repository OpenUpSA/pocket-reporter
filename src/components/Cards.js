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

const CardWrapper = styled.div`
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
  }
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const TopicCard = styled(Card)`
  && {
    width: 30%;
    margin-bottom: 10px;
    color: white;
    background-color: #73c619;
  }
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Cards = () => (
  <React.Fragment>

    <CardWrapper>
      {cardData.map(card => (
        <TopicCard>
          <Content>
            <Icon>{card.icon}</Icon>
            <Typography color="inherit" gutterBottom>
              {card.text}
            </Typography>
          </Content>
        </TopicCard>
      ))}
  </CardWrapper>

  </React.Fragment>
);

export default Cards;