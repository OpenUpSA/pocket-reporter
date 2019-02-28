import React from 'react';
import t from 'prop-types';


import { Wrapper, CardWrapper } from './styled';
import Heading from '../../components/Heading';
import addProps from '../../helpers/addProps';
import Layout from '../../components/Layout';
import Card from '../../components/Card';


const CardIteration = (props) => {
  const {
    resource,
    link,
    title,
    icon,
    click,
  } = props;

  const passedProps = {
    resource,
    link,
    title,
    icon,
    click,
  };

  return (
    <CardWrapper>
      <Card {...passedProps} />
    </CardWrapper>
  );
};


const ListOfFolders = (props) => {
  const {
    questions,
    resources,
    link,
    isoKey,
  } = props;

  const createQuestionCard = addProps(CardIteration, { link }, 'title');
  const createResourceCard = addProps(CardIteration, { link, resource: true }, 'title');

  return (
    <Layout title="Start a new story" {...{ isoKey }}>
      <Heading component="h3">Story Templates</Heading>
      <Wrapper>
        {questions.map(createQuestionCard)}
      </Wrapper>
      <Heading component="h3">Additional Resources</Heading>
      <Wrapper>
        {resources.map(createResourceCard)}
      </Wrapper>
    </Layout>
  );
};


export default ListOfFolders;


CardIteration.propTypes = {
  /** Determines whether card should be grey.
   * By default cards are green; resource cards are grey. */
  resource: t.bool,
  /** Whether a custom Link component should be used to resolve links,
   * for example the Link component from React Router or Gatsby.
   * If not supplied, card link will just fall back to a regular <a> tag. */
  link: t.node,
  /** The title that will be displayed on the card. */
  title: t.string.isRequired,
  /** The icon that will be displayed on the card. Only accepts pre-determined strings. */
  icon: t.string.isRequired,
  /** Passed to the ClickWrapper component wrapping the card.
   * See ClickWrapper documentation for more information. */
  click: t.oneOfType([t.string, t.func]),
};


ListOfFolders.propTypes = {
  /** Whether a custom Link component should be used to resolve links,
   * for example the Link component from React Router or Gatsby.
   * If not supplied, card link will just fall back to a regular <a> tag. */
  link: t.node,
  questions: t.arrayOf(t.shape({
    /** The title that will be displayed on the question card. */
    title: t.string,
    /** The icon that will be displayed on the card. Only accepts pre-determined strings. */
    icon: t.string,
    /** Passed to the ClickWrapper component wrapping the card.
     * See ClickWrapper documentation for more information. */
    click: t.oneOfType([t.string, t.func]),
  })).isRequired,
  resources: t.arrayOf(t.shape({
    /** The title that will be displayed on the resource card. */
    title: t.string,
    /** The icon that will be displayed on the card. Only accepts pre-determined strings. */
    icon: t.string,
    /** Passed to the ClickWrapper component wrapping the card.
     * See ClickWrapper documentation for more information. */
    click: t.oneOfType([t.string, t.func]),
  })).isRequired,
  /** Displays the language that has been selected by the user (as isoKey)
   * in the header-bar. Is also used to determine what language should be
   * used for the hardcode UI-specific/instructional text on the page. */
  isoKey: t.string.isRequired,
};


ListOfFolders.defaultProps = {
  link: null,
};
