import React from 'react';
import t from 'prop-types';
import moment from 'moment';


import addProps from '../../helpers/addProps';
import Layout from '../../components/Layout';
import {
  List,
  StyledCard,
  StyledCardContent,
  StyledAction,
  Click,
  Title,
  Details,
  ProgressContainer,
  ProgressStyled,
  ProgressBackground,
  FloatingWrap,
  EmailIconContainer,
  EmailIconStyled,
} from './styled';


const Card = (props) => {
  const {
    title,
    type,
    created,
    progress: value,
    progressBackground: backgroundValue,
    click,
    link,
    id
  } = props;

  const date = moment(created).fromNow();

  return (
    <StyledCard>
      <Click click="#" {...{ link }}>
        <StyledAction>
          <StyledCardContent>
            <div>
              <Title>{title}</Title>
              <Details>{type}</Details>
              <Details>{date}</Details>
            </div>
            <ProgressContainer>
              <ProgressBackground
                variant="determinate"
                value={backgroundValue}
                thickness="7"
              />
              <FloatingWrap>
                <ProgressStyled
                  variant="determinate"
                  value={value}
                  thickness="7"
                />
              </FloatingWrap>
            </ProgressContainer>
          </StyledCardContent>
        </StyledAction>
      </Click>
      <Click button click="#" {...{ link }}>
        <StyledAction>
          <EmailIconContainer>
            <EmailIconStyled
              nativeColor="#4a4a4a"
              classes={{ fontSizeLarge: 'fontSizeLarge' }}
            />
          </EmailIconContainer>
        </StyledAction>
      </Click>
    </StyledCard>
  );
};


const ListOfStories = (props) => {
  const {
    isoKey,
    stories = [],
    link,
  } = props;

  return (
    <Layout {...{ isoKey }} title="Saved Stories">
      <List>
        {stories.map(addProps(Card, { link }, 'id'))}
      </List>
    </Layout>
  );
};


export default ListOfStories;


ListOfStories.propTypes = {
  children: t.node,
};


ListOfStories.defaultProps = {
  children: null,
};
