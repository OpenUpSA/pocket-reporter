import { connect } from 'react-redux';
import { v4 as generateUniqueId } from 'uuid';
import { navigate } from 'gatsby';
import { add } from '../../../services/redux/modules/stories';

const onStoryTemplatePress = dispatch => (title, questionsArray, template) => {
  const id = generateUniqueId();
  dispatch(add(id, title, questionsArray, template));
  navigate(`/story/index.html?id=${id}`);
};

/**
 * TODO: Add description
 */
const dispatchToProps = (dispatch, ownProps) => ({
  onStoryTemplatePress: onStoryTemplatePress(dispatch),
  ...ownProps,
});

/**
 * Creates function to connect above actions and state values from Redux with component.
 */
const connectRedux = connect(
  null,
  dispatchToProps,
);

export default connectRedux;
