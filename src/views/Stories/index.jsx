import React from 'react';
import t from 'prop-types';
import EmailIcon from '@material-ui/icons/Email';
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
  StoryProgress,
} from './styled';


const Card = (props) => {
  const {
    title,
    type,
    created,
    progress: value,
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
              <div>{type}</div>
              <div>{date}</div>
            </div>
            <StoryProgress variant="determinate" {...{ value }} thickness="5" />
          </StyledCardContent>
        </StyledAction>
      </Click>
      <Click button click="#" {...{ link }}>
        <StyledAction>
          <EmailIcon />
        </StyledAction>
      </Click>
    </StyledCard>
  );
};


const Stories = (props) => {
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


export default Stories;


Stories.propTypes = {
  children: t.node,
};


Stories.defaultProps = {
  children: null,
};
