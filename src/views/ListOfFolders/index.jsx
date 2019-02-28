import React from 'react';
import t from 'prop-types';


import { Wrap, CardWrapper } from './styled';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import addProps from '../../helpers/addProps';


const CardIteration = (props) => {
  const {
    title,
    icon,
    link,
    click,
  } = props;

  const passedProps = {
    title,
    icon,
    link,
    click,
  };

  return (
    <CardWrapper>
      <Card {...passedProps} stacked />
    </CardWrapper>
  );
};


const ListOfFolders = ({ folders = [], link, isoKey }) => (
  <Layout title="Start a new story" {...{ isoKey }} back="#">
    <Wrap>
      {folders.map(addProps(CardIteration, { link }, 'title'))}
    </Wrap>
  </Layout>
);


export default ListOfFolders;


ListOfFolders.propTypes = {
  folders: t.arrayOf(t.shape({
    /** The title that will be displayed on the card. */
    title: t.string,
    /** The icon that will be displayed on the card. Only accepts pre-determined strings. */
    icon: t.string,
  })).isRequired,
  /** Whether a custom Link component should be used to resolve links,
   * for example the Link component from React Router or Gatsby.
   * If not supplied, card link will just fall back to a regular <a> tag. */
  link: t.node,
  /** Displays the language that has been selected by the user (as isoKey)
   * in the header-bar. Is also used to determine what language should be
   * used for the hardcode UI-specific/instructional text on the page. */
  isoKey: t.string,
};


ListOfFolders.defaultProps = {
  link: null,
  isoKey: null,
};


CardIteration.propTypes = {
  /** The title that will be displayed on the card. */
  title: t.string.isRequired,
  /** The icon that will be displayed on the card. Only accepts pre-determined strings. */
  icon: t.string.isRequired,
  /** Whether a custom Link component should be used to resolve links,
   * for example the Link component from React Router or Gatsby.
   * If not supplied, card link will just fall back to a regular <a> tag. */
  link: t.node,
  /** Passed to the ClickWrapper component wrapping the card.
   * See ClickWrapper documentation for more information. */
  click: t.oneOfType([t.string, t.func]),
};

CardIteration.defaultProps = {
  link: null,
};
