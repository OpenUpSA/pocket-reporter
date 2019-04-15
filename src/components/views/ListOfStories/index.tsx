import React from 'react';
import Card from './Card';
import Layout from '../../global/Layout';
import { List } from './styled';

const calcProgress = answers => {
  const totalAnswers = Object.keys(answers);
  const validAnswers = totalAnswers.map(key => answers[key].answer).filter(notNull => !!notNull);
  return ((validAnswers.length / totalAnswers.length) * 100).toFixed();
};

const ListOfStories = ({ isoKey, stories = [], loading }): JSX.Element => {
  if (loading) {
    return (
      <Layout {...{ isoKey }} title="Saved Stories">
        <List>
          {[1, 2, 3].map(key => (
            <Card {...{ key }} />
          ))}
        </List>
      </Layout>
    );
  }

  const storyKeys = Object.keys(stories);
  const storiesArray = storyKeys.map(key => {
    const { name: title, started: created, answers, template: type } = stories[key];
    const progress = calcProgress(answers);

    return {
      title,
      created,
      progress,
      type,
      key,
    };
  });

  return (
    <Layout {...{ isoKey }} title="Saved Stories">
      <List>{storiesArray.map(Card)}</List>
    </Layout>
  );
};

export default ListOfStories;
