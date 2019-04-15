import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { setLanguage } from '../../../services/redux/modules/info';

/**
 * TODO: Description.
 */
const setLanguageAndNavigate = dispatch => (isoKey): null => {
  navigate(`/${isoKey}/folders/index.html`);
  dispatch(setLanguage(isoKey));
  return null;
};

/**
 * TODO: Add description
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  setLanguage: setLanguageAndNavigate(dispatch),
  ...ownProps,
});

/**
 * Creates function to connect above actions and state values from Redux with component.
 */
const connectRedux = connect(
  null,
  mapDispatchToProps,
);

export default connectRedux;
