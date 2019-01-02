import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';



const Markup = ({ folders = [], loading = true }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      <h1>Folders</h1>
      <Preview>
        {JSON.stringify(folders, 0, 2)}
      </Preview>
    </Fragment>
  )
}


Markup.propTypes = {
  loading: PropTypes.bool,
  folders: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    name: PropTypes.string,
    storyTemplates: PropTypes.arrayOf(PropTypes.number)
  }))
}

Markup.defaultProps = {
  loading: true,
  folders: [],
}

export default Markup;



