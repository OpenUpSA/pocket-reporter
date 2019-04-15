import { connect } from 'react-redux';
import { setLanguage } from '../../../services/redux/modules/info';

/**
 * TODO: Add description
 */
const stateToProps = ({ info }, ownProps) => ({
  isoKey: info.language,
  ...ownProps,
});

/**
 * TODO: Add description
 */
const dispatchToProps = (dispatch, ownProps) => ({
  setLanguage: isoKey => dispatch(setLanguage(isoKey)),
  ...ownProps,
});

/**
 * Creates function to connect above actions and state values from Redux with component.
 */
const connectRedux = connect(
  stateToProps,
  dispatchToProps,
);

export default connectRedux;
