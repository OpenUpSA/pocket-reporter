import React from 'react'
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';

import GavelIcon from '@material-ui/icons/Gavel';
import FlagIcon from '@material-ui/icons/Flag';

const cardData = [
  {
    icon: GavelIcon,
    text: 'Legal'
  },

  {
    icon: FlagIcon,
    text: 'Elections'
  },

  {
    icon: GavelIcon,
    text: 'Health'
  },

  {
    icon: GavelIcon,
    text: 'Hard News'
  },

  {
    icon: GavelIcon,
    text: 'Service Delivery'
  },

  {
    icon: GavelIcon,
    text: 'Sport'
  },

  {
    icon: GavelIcon,
    text: 'Gender Violence'
  }
]

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
  align-content: center;
  justify-content: center;
`;

const Cards = () => (
  <React.Fragment>

    <CardWrapper>
      {cardData.map(card => (
        <TopicCard>
          <Content>
            <Icon>flag</Icon>
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