import React, { Fragment } from 'react';
import Layout from '../../global/Layout';
import Modal from './Modal';
import List from './List';

const Presentation = ({ isoKey, questions, resources, icon, modalProps }) => (
  <Fragment>
    <Modal {...modalProps} />
    <Layout title="Start a new story" back={`/${isoKey}/folders/index.html`} {...{ isoKey }}>
      <div>
        {questions.length > 0 && <List {...{ questions, icon }} />}
        {resources.length > 0 && <List {...{ resources, icon }} />}
      </div>
    </Layout>{' '}
  </Fragment>
);

export default Presentation;
