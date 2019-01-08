import React, { Fragment } from 'react';
import Preview from '../components/Preview';


const Markup = (props) => (
  <Fragment>
    <h1>Folder Content</h1>
    <Preview>
      {JSON.stringify(props, 0, 2)}
    </Preview>
  </Fragment>
);


export default Markup;
