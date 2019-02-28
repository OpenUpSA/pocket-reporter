import React from 'react';
import t from 'prop-types';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
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
              <Typography>{title}</Typography>
              <Typography>{type}</Typography>
              <Typography>{date}</Typography>
            </div>
            <CircularProgress variant="determinate" {...{ value }} />
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
  /** React content nested inside this component. */
  children: t.node,
};


Stories.defaultProps = {
  children: null,
};
