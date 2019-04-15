import { connect } from 'react-redux';

/**
 * TODO: Add description
 */
const stateToProps = ({ info }, ownProps) => ({
  isoKey: info.language,
  ...ownProps,
});

/**
 * Creates function to connect above actions and state values from Redux with component.
 */
const connectRedux = connect(stateToProps);

export default connectRedux;
