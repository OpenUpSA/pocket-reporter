import React, { Component } from 'react';

import Markup from './Markup';

interface Tprops {
  onChange: (any) => any;
  value: string;
}

class IconSelector extends Component<Tprops> {
  handleChange = event => {
    const { value } = event.target;
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { handleChange } = this;
    const { value } = this.props;
    return <Markup {...{ value, handleChange }} />;
  }
}

export default IconSelector;
