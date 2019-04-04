import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { setLanguage } from '../../redux/modules/info';

const createChangeCallback = dispatch => (isoKey) => {
  dispatch(setLanguage(isoKey));
  return navigate(`${isoKey}/folders/index.html`);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeCallback: createChangeCallback(dispatch),
  ...ownProps,
});

const connectToReduxStore = connect(null, mapDispatchToProps);

export default connectToReduxStore;
