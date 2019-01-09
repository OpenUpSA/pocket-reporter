import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Icon from '../components/Icon';

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

const CardLink = styled(Link)`
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

const Text = styled.p`
  margin: 0;
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

  const foldersArray = props.foldersArray;
  const questions = props.questionPages;
  const resources = props.resourcePages;

  if (props.stacked) {
    return (
      <CardWrapper>
        {foldersArray.map(card => (
          <CardItemStacked key={card.icon}>
            <CardLink to={card.url}>
              <TopicCard>
                <Content>
                  <Icon type={card.icon} />
                  <Text color="inherit">
                    {card.title}
                  </Text>
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
      {questions.map(card => (
        <CardItem key={card.title}>
          <CardLink to={card.url}>
            <TopicCard>
              <Content>
                {/*<Icon type={card.icon} />*/}
                <Text color="inherit">
                  {card.title}
                </Text>
              </Content>
            </TopicCard>
          </CardLink>
        </CardItem>
      ))}
    </CardWrapper>
  )

}

Cards.propTypes = {
  folderContent: PropTypes.array
}



export default Cards;