import { connect } from 'react-redux';
import generateUniqueId from 'uuid/v4';
import { navigate } from 'gatsby';
import { add as addNewStory } from '../../redux/modules/stories';

const createChangeCallback = dispatch => (name, questions) => {
  const id = generateUniqueId();
  dispatch(addNewStory(id, name, questions));
  return navigate(`story/index.html?id=${id}`);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeCallback: createChangeCallback(dispatch),
  ...ownProps,
});

const connectToReduxStore = connect(null, mapDispatchToProps);

export default connectToReduxStore;
