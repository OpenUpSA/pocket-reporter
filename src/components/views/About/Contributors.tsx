import React, { Fragment } from 'react';
import Heading from '../../global/Heading';
import { AboutList, AboutLink } from './styled';

const SingleContributor = ({ name, link }): JSX.Element => (
  <li key={name}>
    <AboutLink href={link}>{name}</AboutLink>
  </li>
);

const Contributors = ({ contributors }): JSX.Element => (
  <Fragment>
    <Heading>Contributors</Heading>
    <AboutList>{contributors.map(SingleContributor)}</AboutList>
  </Fragment>
);

export default Contributors;
