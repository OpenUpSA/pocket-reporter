import { connect } from 'react-redux';

// import action1 from '../../../redux/actions/action1';
// import { action2, action3 } from '../../../redux/modules/example';

/**
 * TODO: Add description
 */
const stateToProps = ({ stories, info }, ownProps) => ({
  isoKey: info.language,
  hasStories: Object.keys(stories).length > 0,
  stories,
  ...ownProps,
});

/**
 * Creates function to connect above actions and state values from Redux with component.
 */
const connectRedux = connect(stateToProps);

export default connectRedux;
