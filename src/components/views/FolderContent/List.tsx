import React, { Fragment } from 'react';
import Heading from '../../global/Heading';
import { Wrapper, CardWrapper } from './styled';
import Card from '../../global/Card';
import { Tresource, Tquestion } from './schema';
import { Ticon } from '../../../data/hardcoded/icons/schema';

interface Tprops {
  resources?: Tresource[];
  questions?: Tquestion[];
  icon: Ticon;
}

type Tlist = (Tprops) => JSX.Element | null;

const List: Tlist = ({ resources, questions, icon }) => {
  if (questions) {
    return (
      <Fragment>
        <Heading component="h3">Story Templates</Heading>
        <Wrapper>
          {questions.map(({ title, click }) => (
            <CardWrapper key={title}>
              <Card {...{ title, icon }} onClickEvent={click} />
            </CardWrapper>
          ))}
        </Wrapper>
      </Fragment>
    );
  }

  if (resources) {
    return (
      <Fragment>
        <Heading component="h3">Additional Resources</Heading>
        <Wrapper>
          {resources.map(({ title, click }) => (
            <CardWrapper key={title}>
              <Card {...{ title, icon }} onClickEvent={click} resource />
            </CardWrapper>
          ))}
        </Wrapper>
      </Fragment>
    );
  }

  return null;
};

export default List;
