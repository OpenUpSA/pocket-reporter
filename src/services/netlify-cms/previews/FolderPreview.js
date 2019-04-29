import React, { Fragment } from 'react';
import StyledSheets from './StyledSheets';

import Layout from '../../../components/global/Layout';
import Card from '../../../components/global/Card';
import { CardWrapper } from '../../../components/views/ListOfFolders/styled';
import List from '../../../components/views/FolderContent/List';

import { withStyles } from '@material-ui/core/styles';
import withJss from './withJss';
import getPageContext from './getPageContext';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 5,
  },
  wrapper: {
    padding: 20,
  },
});

const transformData = arrayIn => {
  return arrayIn
    .filter(e => e.content && e.content.trim() !== '')
    .map(e => {
      return { click: null, title: e.content };
    });
};

const StyledPreview = ({ classes, data }) => {
  const resources = transformData(data.resources);
  const questions = transformData(data.questions);
  const { icon } = data;
  const isoKey = 'ENG';
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Layout title="Start a new story" back={null} {...{ isoKey }}>
          <CardWrapper>
            <Card title={data.title} stacked />
          </CardWrapper>
          {questions.length > 0 && <List {...{ questions, icon }} />}
          {resources.length > 0 && <List {...{ resources, icon }} />}
        </Layout>
      </div>
    </div>
  );
};

const Preview = withJss(withStyles(styles)(StyledPreview));

export default class FolderPreview extends React.Component {
  constructor(props) {
    super(props);
    this.muiPageContext = getPageContext();
  }
  render() {
    const data = this.props.entry.getIn(['data']).toJS();
    if (data) {
      return (
        <StyledSheets>
          <Fragment>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{ __html: this.muiPageContext.sheetsRegistry.toString() }}
            />
            <Preview data={data} />
          </Fragment>
        </StyledSheets>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
