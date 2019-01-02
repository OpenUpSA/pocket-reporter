import React, { Component } from 'react';

import { get as request } from 'axios';
import Markup from './Markup';
import { apiPath } from './config.json';
import transformResponse from './transformResponse';


class Folders extends Component {
  state = {
    loading: true,
    folders: [],
  }

  componentDidMount() {
    request(apiPath, { transformResponse })
      .then(({ data }) => this.setState({ folders: data }))
      .then(() => this.setState({ loading: false }))
      .catch(console.warn)
  }

  render() {
    return <Markup loading={this.state.loading} folders={this.state.folders} />
  }
}


export default Folders;
