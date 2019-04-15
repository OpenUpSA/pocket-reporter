import { connect } from 'react-redux';
import { update, remove } from '../../../services/redux/modules/stories';
import sendWithWhatsapp from '../../../services/redux/actions/sendWithWhatsapp';

/**
 * TODO: Add description
 */
const stateToProps = ({ stories }, ownProps) => ({
  stories,
  ...ownProps,
});

/**
 * TODO: Add description
 */
const dispatchToProps = (dispatch, ownProps) => ({
  onUpdateAction: (id, key, answer) => dispatch(update(id, key, answer)),
  onDeleteAction: id => dispatch(remove(id)),
  onSendAction: id => dispatch(sendWithWhatsapp(id)),
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
